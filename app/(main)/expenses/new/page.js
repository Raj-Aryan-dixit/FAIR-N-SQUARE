"use client";

import { useRouter } from "next/navigation";
import { ExpenseForm } from "./components/expense-from";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function NewExpensePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Add New Expense
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Record and split expenses effortlessly with your friends and groups
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-3xl"></div>
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-indigo-500/20 p-12">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <span className="text-sm font-medium text-slate-600 uppercase tracking-wider">Expense Entry</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Create New Record</h2>
            </div>
            
            <Tabs defaultValue="individual">
              <div className="relative mb-10">
                <TabsList className="grid w-full grid-cols-2 bg-slate-50/80 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-200/50">
                  <TabsTrigger 
                    value="individual" 
                    className="relative rounded-xl py-4 px-6 font-semibold text-sm data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 data-[state=active]:text-blue-600 data-[state=active]:border data-[state=active]:border-blue-200 text-slate-600 transition-all duration-300 hover:text-blue-500"
                  >
                    <span className="relative z-10">Personal Expense</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="group" 
                    className="relative rounded-xl py-4 px-6 font-semibold text-sm data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 data-[state=active]:text-purple-600 data-[state=active]:border data-[state=active]:border-purple-200 text-slate-600 transition-all duration-300 hover:text-purple-500"
                  >
                    <span className="relative z-10">Group Expense</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50/50 to-white rounded-2xl p-8 border border-slate-100">
                <TabsContent value="individual" className="mt-0">
                  <ExpenseForm
                    type="individual"
                    onSuccess={(id) => router.push(`/person/${id}`)}
                  />
                </TabsContent>
                <TabsContent value="group" className="mt-0">
                  <ExpenseForm
                    type="group"
                    onSuccess={(id) => router.push(`/groups/${id}`)}
                  />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
