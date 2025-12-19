import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Cardapios from "./pages/Cardapios";
import Exercicios from "./pages/Exercicios";
import { useState } from "react";

function Router() {
  const [activeTab, setActiveTab] = useState("desafio");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-accent to-secondary text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎯</span>
            <h1 className="text-3xl md:text-4xl font-bold">Desafio Lipedema</h1>
          </div>
          <p className="text-accent-foreground/90 text-sm md:text-base">
            Sua jornada para uma vida sem dor e inchaço
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start rounded-none bg-transparent border-b border-border h-auto p-0">
              <TabsTrigger
                value="desafio"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-6 py-4 font-semibold"
              >
                🎯 Desafio Diário
              </TabsTrigger>
              <TabsTrigger
                value="cardapios"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-6 py-4 font-semibold"
              >
                🥗 Cardápios
              </TabsTrigger>
              <TabsTrigger
                value="exercicios"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-6 py-4 font-semibold"
              >
                🏋️ Exercícios
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === "desafio" && <Home />}
        {activeTab === "cardapios" && <Cardapios />}
        {activeTab === "exercicios" && <Exercicios />}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            Este aplicativo é um guia de apoio e não substitui o acompanhamento
            médico especializado.
          </p>
          <p className="mt-2">
            Consulte sempre um angiologista, nutricionista ou educador físico.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
