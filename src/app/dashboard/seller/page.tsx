"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Package,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  BarChart4,
  PlusCircle,
  ChevronRight,
  Clock,
  CheckCircle,
  BadgeCheck
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data for orders and analytics
const orders = [
  {
    id: "ORD1234567",
    customer: "John Doe",
    productName: "Electronics Package",
    address: "123 Main St, City A",
    orderDate: "April 5, 2025",
    status: "in-transit",
    price: "$129.99"
  },
  {
    id: "ORD2345678",
    customer: "Jane Smith",
    productName: "Home Decor Bundle",
    address: "456 Oak Ave, City B",
    orderDate: "April 6, 2025",
    status: "processing",
    price: "$89.50"
  },
  {
    id: "ORD3456789",
    customer: "Mike Johnson",
    productName: "Fashion Collection",
    address: "789 Pine St, City C",
    orderDate: "April 3, 2025",
    status: "delivered",
    price: "$210.75"
  },
  {
    id: "ORD4567890",
    customer: "Sarah Williams",
    productName: "Sports Equipment",
    address: "321 Elm St, City D",
    orderDate: "April 7, 2025",
    status: "processing",
    price: "$149.95"
  }
]

const analytics = {
  ordersToday: 12,
  ordersTrend: "+23%",
  revenue: "$1,248.50",
  revenueTrend: "+15%",
  pendingOrders: 8,
  completedOrders: 43
}

export default function SellerDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-3xl font-bold tracking-tight">Seller Dashboard</h1>
              <div className="flex items-center gap-2">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add New Product
                </Button>
              </div>
            </div>

            {/* Analytics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Orders Today
                  </CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.ordersToday}</div>
                  <p className="text-xs text-muted-foreground flex items-center mt-1">
                    <span className="text-green-500 flex items-center">
                      <ArrowUp className="mr-1 h-4 w-4" />
                      {analytics.ordersTrend}
                    </span>
                    <span className="ml-1">from last week</span>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Revenue
                  </CardTitle>
                  <BarChart4 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.revenue}</div>
                  <p className="text-xs text-muted-foreground flex items-center mt-1">
                    <span className="text-green-500 flex items-center">
                      <TrendingUp className="mr-1 h-4 w-4" />
                      {analytics.revenueTrend}
                    </span>
                    <span className="ml-1">from last month</span>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pending Orders
                  </CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.pendingOrders}</div>
                  <p className="text-xs text-muted-foreground mt-1">Awaiting processing</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Orders
                  </CardTitle>
                  <BadgeCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.completedOrders}</div>
                  <p className="text-xs text-muted-foreground mt-1">Successfully delivered</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full md:w-[400px] grid-cols-4">
                <TabsTrigger value="all">All Orders</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="in-transit">In Transit</TabsTrigger>
                <TabsTrigger value="delivered">Delivered</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">All Orders</h2>
                  <Button variant="outline" size="sm">
                    Export
                  </Button>
                </div>
                <Card>
                  <CardContent className="p-0">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b">
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Order ID
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Customer
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Product
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Status
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Price
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          {orders.map((order, index) => (
                            <tr
                              key={order.id}
                              className={`border-b transition-colors ${
                                index % 2 === 0 ? "bg-muted/50" : ""
                              }`}
                            >
                              <td className="p-4 align-middle font-medium">{order.id}</td>
                              <td className="p-4 align-middle">{order.customer}</td>
                              <td className="p-4 align-middle">{order.productName}</td>
                              <td className="p-4 align-middle">
                                <OrderStatusBadge status={order.status} />
                              </td>
                              <td className="p-4 align-middle">{order.price}</td>
                              <td className="p-4 align-middle">
                                <Button variant="ghost" size="sm">
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="processing" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Processing Orders</h2>
                </div>
                <Card>
                  <CardContent className="p-0">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b">
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Order ID
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Customer
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Product
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Price
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          {orders
                            .filter(order => order.status === "processing")
                            .map((order, index) => (
                            <tr
                              key={order.id}
                              className={`border-b transition-colors ${
                                index % 2 === 0 ? "bg-muted/50" : ""
                              }`}
                            >
                              <td className="p-4 align-middle font-medium">{order.id}</td>
                              <td className="p-4 align-middle">{order.customer}</td>
                              <td className="p-4 align-middle">{order.productName}</td>
                              <td className="p-4 align-middle">{order.price}</td>
                              <td className="p-4 align-middle">
                                <Button variant="outline" size="sm">
                                  Mark as Shipped
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="in-transit" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">In Transit Orders</h2>
                </div>
                <Card>
                  <CardContent className="p-0">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b">
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Order ID
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Customer
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Product
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Address
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          {orders
                            .filter(order => order.status === "in-transit")
                            .map((order, index) => (
                            <tr
                              key={order.id}
                              className={`border-b transition-colors ${
                                index % 2 === 0 ? "bg-muted/50" : ""
                              }`}
                            >
                              <td className="p-4 align-middle font-medium">{order.id}</td>
                              <td className="p-4 align-middle">{order.customer}</td>
                              <td className="p-4 align-middle">{order.productName}</td>
                              <td className="p-4 align-middle">{order.address}</td>
                              <td className="p-4 align-middle">
                                <Button variant="outline" size="sm">
                                  Track Delivery
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="delivered" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Delivered Orders</h2>
                </div>
                <Card>
                  <CardContent className="p-0">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b">
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Order ID
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Customer
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Product
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Date Delivered
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium">
                              Price
                            </th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          {orders
                            .filter(order => order.status === "delivered")
                            .map((order, index) => (
                            <tr
                              key={order.id}
                              className={`border-b transition-colors ${
                                index % 2 === 0 ? "bg-muted/50" : ""
                              }`}
                            >
                              <td className="p-4 align-middle font-medium">{order.id}</td>
                              <td className="p-4 align-middle">{order.customer}</td>
                              <td className="p-4 align-middle">{order.productName}</td>
                              <td className="p-4 align-middle">{order.orderDate}</td>
                              <td className="p-4 align-middle">{order.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

function OrderStatusBadge({ status }: { status: string }) {
  switch (status) {
    case "processing":
      return (
        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
          Processing
        </Badge>
      )
    case "in-transit":
      return (
        <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          In Transit
        </Badge>
      )
    case "delivered":
      return (
        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
          Delivered
        </Badge>
      )
    default:
      return (
        <Badge variant="outline">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      )
  }
}
