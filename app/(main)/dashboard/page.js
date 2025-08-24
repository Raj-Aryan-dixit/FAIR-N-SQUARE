"use client";

import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { BarLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Users, CreditCard, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ExpenseSummary } from "./_components/expense-summary";
import { BalanceSummary } from "./_components/balance-summary";
import { GroupList } from "./_components/group-list";

export default function Dashboard() {
  const { data: balances, isLoading: balancesLoading } = useConvexQuery(
    api.dashboard.getUserBalances
  );

  const { data: groups, isLoading: groupsLoading } = useConvexQuery(
    api.dashboard.getUserGroups
  );

  const { data: totalSpent, isLoading: totalSpentLoading } = useConvexQuery(
    api.dashboard.getTotalSpent
  );

  const { data: monthlySpending, isLoading: monthlySpendingLoading } =
    useConvexQuery(api.dashboard.getMonthlySpending);

  const isLoading =
    balancesLoading ||
    groupsLoading ||
    totalSpentLoading ||
    monthlySpendingLoading;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto py-4 sm:py-6 lg:py-8 px-4 space-y-6 sm:space-y-8">
        {isLoading ? (
          <div className="w-full py-24 flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <BarLoader width={200} color="#3b82f6" height={4} />
            <p className="text-muted-foreground animate-pulse">Loading your dashboard...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">Welcome back! Here&apos;s your financial overview.</p>
              </div>
              <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/expenses/new">
                  <PlusCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Add Expense
                </Link>
              </Button>
            </div>

            {/* Balance overview cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -mr-10 -mt-10"></div>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Total Balance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                    {balances?.totalBalance > 0 ? (
                      <span className="text-emerald-600 flex items-center gap-1">
                        <span className="text-lg">+</span>${balances?.totalBalance.toFixed(2)}
                      </span>
                    ) : balances?.totalBalance < 0 ? (
                      <span className="text-red-500 flex items-center gap-1">
                        <span className="text-lg">-</span>${Math.abs(balances?.totalBalance).toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-slate-600">$0.00</span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {balances?.totalBalance > 0
                      ? "🎉 You are owed money"
                      : balances?.totalBalance < 0
                        ? "💸 You owe money"
                        : "✅ All settled up!"}
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-emerald-50 dark:from-slate-800 dark:to-slate-700">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full -mr-10 -mt-10"></div>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    You are owed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">
                    ${balances?.youAreOwed.toFixed(2)}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                    From {balances?.oweDetails?.youAreOwedBy?.length || 0} {(balances?.oweDetails?.youAreOwedBy?.length || 0) === 1 ? 'person' : 'people'}
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-slate-700">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full -mr-10 -mt-10"></div>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    You owe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {balances?.oweDetails?.youOwe?.length > 0 ? (
                    <>
                      <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1 sm:mb-2">
                        ${balances?.youOwe.toFixed(2)}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                        To {balances?.oweDetails?.youOwe?.length || 0} {(balances?.oweDetails?.youOwe?.length || 0) === 1 ? 'person' : 'people'}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl sm:text-3xl font-bold text-slate-600 mb-1 sm:mb-2">$0.00</div>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                        🎉 You don&apos;t owe anyone
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Main dashboard content */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
              {/* Left column */}
              <div className="xl:col-span-2 space-y-6 lg:space-y-8">
                <ExpenseSummary
                  monthlySpending={monthlySpending}
                  totalSpent={totalSpent}
                />
              </div>

              {/* Right column */}
              <div className="space-y-6 lg:space-y-8">
                {/* Balance details */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700">
                  <CardHeader className="pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="hidden sm:inline">Balance Details</span>
                        <span className="sm:hidden">Balances</span>
                      </CardTitle>
                      <Button variant="ghost" asChild className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors p-1 sm:p-2">
                        <Link href="/contacts">
                          <span className="hidden sm:inline">View all</span>
                          <ChevronRight className="ml-0 sm:ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 sm:pt-6">
                    <BalanceSummary balances={balances} />
                  </CardContent>
                </Card>

                {/* Groups */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700">
                  <CardHeader className="pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                        <span className="hidden sm:inline">Your Groups</span>
                        <span className="sm:hidden">Groups</span>
                      </CardTitle>
                      <Button variant="ghost" asChild className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors p-1 sm:p-2">
                        <Link href="/contacts">
                          <span className="hidden sm:inline">View all</span>
                          <ChevronRight className="ml-0 sm:ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 sm:pt-6">
                    <GroupList groups={groups} />
                  </CardContent>
                  <CardFooter className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-700">
                    <Button variant="outline" asChild className="w-full bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 border-emerald-200 text-emerald-700 hover:text-emerald-800 transition-all duration-300 transform hover:scale-105">
                      <Link href="/contacts?createGroup=true">
                        <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="hidden sm:inline">Create New Group</span>
                        <span className="sm:hidden">New Group</span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
