"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Truck, Clock, MapPin, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data for deliveries
const deliveries = [
  {
    id: "QX1234567890",
    status: "in-transit",
    fromAddress: "123 Main St, City A",
    toAddress: "456 Oak Ave, City B",
    estimatedDelivery: "April 12, 2025",
    updates: [
      { date: "April 7, 2025", time: "09:30 AM", status: "Package picked up", location: "Warehouse A" },
      { date: "April 8, 2025", time: "02:15 PM", status: "In transit", location: "Distribution Center" },
      { date: "April 9, 2025", time: "10:45 AM", status: "Out for delivery", location: "Local Facility" }
    ]
  },
  {
    id: "QX2345678901",
    status: "delivered",
    fromAddress: "789 Pine St, City C",
    toAddress: "321 Elm St, City D",
    deliveryDate: "April 5, 2025",
    deliveryTime: "11:20 AM",
    updates: [
      { date: "April 3, 2025", time: "08:45 AM", status: "Package picked up", location: "Warehouse B" },
      { date: "April 4, 2025", time: "03:30 PM", status: "In transit", location: "Distribution Center" },
      { date: "April 5, 2025", time: "09:15 AM", status: "Out for delivery", location: "Local Facility" },
      { date: "April 5, 2025", time: "11:20 AM", status: "Delivered", location: "Recipient's address" }
    ]
  },
  {
    id: "QX3456789012",
    status: "processing",
    fromAddress: "555 Maple Dr, City E",
    toAddress: "777 Cedar Ln, City F",
    estimatedDelivery: "April 15, 2025",
    updates: [
      { date: "April 9, 2025", time: "01:15 PM", status: "Order received", location: "Processing Center" }
    ]
  }
]

export default function ClientDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Client Dashboard</h1>
              <Button>Track New Package</Button>
            </div>

            <Tabs defaultValue="active" className="w-full">
              <TabsList className="grid w-full md:w-[400px] grid-cols-3">
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="delivered">Delivered</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4 mt-4">
                <h2 className="text-xl font-semibold">Active Shipments</h2>
                {deliveries
                  .filter(delivery => delivery.status !== "delivered")
                  .map(delivery => (
                    <Card key={delivery.id} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-medium">
                            Tracking ID: {delivery.id}
                          </CardTitle>
                          <StatusBadge status={delivery.status} />
                        </div>
                        <CardDescription>
                          From: {delivery.fromAddress}
                        </CardDescription>
                        <CardDescription>
                          To: {delivery.toAddress}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="mr-2 h-4 w-4" />
                            <span>Expected delivery: {delivery.estimatedDelivery}</span>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-medium">Recent Updates</h4>
                            <div className="space-y-2">
                              {delivery.updates.slice(-2).map((update, index) => (
                                <div key={index} className="flex items-start gap-2 text-sm">
                                  <div className="h-4 w-4 mt-0.5">
                                    <div className="h-full w-[2px] bg-primary mx-auto" />
                                  </div>
                                  <div>
                                    <p className="font-medium">{update.status}</p>
                                    <p className="text-muted-foreground">
                                      {update.date} at {update.time} • {update.location}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="delivered" className="space-y-4 mt-4">
                <h2 className="text-xl font-semibold">Delivered Packages</h2>
                {deliveries
                  .filter(delivery => delivery.status === "delivered")
                  .map(delivery => (
                    <Card key={delivery.id} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-medium">
                            Tracking ID: {delivery.id}
                          </CardTitle>
                          <StatusBadge status={delivery.status} />
                        </div>
                        <CardDescription>
                          From: {delivery.fromAddress}
                        </CardDescription>
                        <CardDescription>
                          To: {delivery.toAddress}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center text-green-600 dark:text-green-500">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            <span>Delivered on: {delivery.deliveryDate} at {delivery.deliveryTime}</span>
                          </div>
                          <Button variant="outline" className="w-full">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="all" className="space-y-4 mt-4">
                <h2 className="text-xl font-semibold">All Shipments</h2>
                {deliveries.map(delivery => (
                  <Card key={delivery.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-medium">
                          Tracking ID: {delivery.id}
                        </CardTitle>
                        <StatusBadge status={delivery.status} />
                      </div>
                      <CardDescription>
                        From: {delivery.fromAddress}
                      </CardDescription>
                      <CardDescription>
                        To: {delivery.toAddress}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-4">
                        {delivery.status === "delivered" ? (
                          <div className="flex items-center text-green-600 dark:text-green-500">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            <span>Delivered on: {delivery.deliveryDate} at {delivery.deliveryTime}</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="mr-2 h-4 w-4" />
                            <span>Expected delivery: {delivery.estimatedDelivery}</span>
                          </div>
                        )}
                        <Button variant="outline" className="w-full">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "processing":
      return (
        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800">
          <Package className="mr-1 h-3 w-3" />
          Processing
        </Badge>
      )
    case "in-transit":
      return (
        <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800">
          <Truck className="mr-1 h-3 w-3" />
          In Transit
        </Badge>
      )
    case "delivered":
      return (
        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800">
          <CheckCircle className="mr-1 h-3 w-3" />
          Delivered
        </Badge>
      )
    default:
      return (
        <Badge variant="outline">
          <MapPin className="mr-1 h-3 w-3" />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      )
  }
}
