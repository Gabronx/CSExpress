import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import {
  Truck,
  Package,
  ShieldCheck,
  Clock,
  Globe,
  ArrowRight
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Rastreie seu pacote com CSExpress
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Serviço de entrega rápido e confiável para todas as suas necessidades de envio. Insira seu número de rastreamento abaixo.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Insira seu número de rastreamento"
                    type="text"
                  />
                  <Button type="submit">
                    Rastrear
                  </Button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  e.g. QX1234567890
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Por que escolher o CSExpress?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Oferecemos um serviço excelente com compromisso com rapidez, confiabilidade e segurança.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <Card className="backdrop-blur-sm border border-muted">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Entrega rápida</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Garantimos que seus pacotes cheguem ao destino de forma rápida e eficiente.
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm border border-muted">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Serviço confiável</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Nosso serviço é consistente e confiável, com um histórico comprovado.
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm border border-muted">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Todos os tipos de pacotes</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      De pequenas encomendas a grandes pacotes, lidamos com remessas de todos os tamanhos.
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm border border-muted">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Rastreamento em tempo real</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Acompanhe sua entrega com nosso sistema de rastreamento preciso.
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm border border-muted">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Cobertura nacional</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Fazemos entregas em todas as regiões com uma ampla rede de transportadoras.
                    </p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm border border-muted">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Manuseio Seguro</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Suas remessas são manuseadas com cuidado e mantidas seguras durante o transporte.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8">
                <Button className="group" size="lg">
                  Saber mais
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">CSExpress</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                Termos
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                Contato
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 CSExpress. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
