import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BadgeCheckIcon, Verified } from "lucide-react";
import Link from "next/link";
import Silk from "@/components/ui/silk";
import { Arrow } from "@radix-ui/react-popover";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <div className="relative flex flex-col pt-16 min-h-screen">
      <div className="fixed inset-0 -z-10" style={{ willChange: "transform" }}>
        <Silk color="#582EFF" speed={3} scale={1} noiseIntensity={0.8} />
      </div>
      <section className="mt-10 pb-10 space-y-10 md:space-y-20 ">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-6">
          <Badge
            variant="outline"
            className="bg-blue-300 text-blue-700 dark:bg-blue-800"
          >
            <BadgeCheckIcon />
            Expenses made easy, friendships made stronger.
          </Badge>

          <h1 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-8xl">
            Split smart. Pay fair. Stay chill.
          </h1>

          <p className="mx-auto max-w-[700px] text-lg md:text-2xl text-gray-500">
            FairnSquare makes splitting bills easy and fair — track, split, and
            settle in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size={"lg"}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="#how-it-works">
              <Button size={"lg"}>How It Works</Button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div>
            <Image
              src="/hero.jpg"
              width={1100}
              height={300}
              alt="Hero Image"
              priority
              className="rounded-lg shadow-lg mx-auto border border-gray-300 opacity-70"
            />
          </div>
        </div>
      </section>

      <section id="features" className="bg-grey-50 py-16 ">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-6">
          <Badge
            variant="outline"
            className="bg-blue-300 text-blue-700 dark:bg-blue-800"
          >
            <BadgeCheckIcon />
            Features
          </Badge>

          <h2 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-5xl">
            Features that make splitting a breeze
          </h2>

          <p className="mx-auto max-w-[700px] text-lg md:text-2xl text-blue-200 font-medium">
            FairnSquare is packed with features to make splitting bills easy,
            fair, and fun.
          </p>

          <div className=" mx-auto grid grid-cols-1 max-w-5xl md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ title, Icon, color, bg, description }, index) => (
              <Card
                key={title}
                className="flex flex-col items-center p-6 mb-6 md:mb-8 space-y-4 bg-blue-900/80 backdrop-blur-sm border-blue-700"
              >
                <div className={`rounded-full ${bg} p-3`}>
                  <Icon className={`h-10 w-10 ${color}`} />
                </div>

                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-blue-200">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-grey-50 py-16 ">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-6">
          <Badge
            variant="outline"
            className="bg-blue-300 text-blue-700 dark:bg-blue-800"
          >
            <BadgeCheckIcon />
            How It Works
          </Badge>

          <h2 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-5xl">
            How FairnSquare simplifies your life
          </h2>

          <p className="mx-auto max-w-[700px] text-lg md:text-2xl text-blue-200 font-medium">
            FairnSquare uses smart algorithms to handle all the math, so you can
            focus on enjoying your time with friends and family.
          </p>

          <div className=" mx-auto grid grid-cols-1 max-w-5xl md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map(({ description, label, title }, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-blue-900/80 backdrop-blur-sm border-l-4 border-blue-500 rounded-r-xl p-8 space-y-6 hover:bg-blue-800/80 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-4 py-2 text-lg font-bold">
                    {label}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
                <p className="text-blue-200 text-lg leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-grey-50 py-16 ">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-6">
          <Badge
            variant="outline"
            className="bg-blue-300 text-blue-700 dark:bg-blue-800"
          >
            <BadgeCheckIcon />
            Testimonials
          </Badge>

          <h2 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-5xl">
            What our users say.
          </h2>

          <div className="mx-auto grid grid-cols-1 max-w-5xl md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({ quote, name, role, image }, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-blue-900/90 to-blue-800/90 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 border border-blue-500/30"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-blue-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute -top-2 -left-2 text-blue-400/50 text-6xl font-serif leading-none">"</div>
                    <p className="text-white text-lg leading-relaxed pl-8 pr-4 relative z-10">
                      {quote}
                    </p>
                    <div className="absolute -bottom-4 -right-2 text-blue-400/50 text-6xl font-serif leading-none rotate-180">"</div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-blue-500/30">
                    <Avatar className="w-14 h-14 rounded-xl bg-gray-900 border border-gray-600 shadow-lg">
                      <AvatarImage src={image} alt={name} className="object-cover rounded-xl" />
                      <AvatarFallback className="bg-gray-900 text-white font-bold text-lg rounded-xl">{name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <p className="text-white font-bold text-lg">{name}</p>
                      <p className="text-blue-300 text-sm font-medium">{role}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative py-16 bg-gradient-to-br from-black via-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>
        <div className="container mx-auto px-4 md:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Ready to make splitting bills a breeze?
          </h2>
          <p className="text-blue-200 text-lg md:text-2xl">
            Join thousands of users who trust FairNSquare for hassle-free bill
            splitting.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-black hover:from-blue-700 hover:to-gray-900 text-white shadow-lg">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p className="text-blue-200 text-sm mt-4">
            No credit card required. Start for free!
          </p>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-black py-8 border-t border-blue-500/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-blue-200 text-lg font-medium">
            Made with <span className="text-red-400 animate-pulse">❤️</span> by{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold">
              Raj Aryan Dixit
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
