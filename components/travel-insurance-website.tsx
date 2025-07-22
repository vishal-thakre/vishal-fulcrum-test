"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Bell, CalendarIcon, ChevronDown, Info, User, MapPin } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export function TravelInsuranceWebsite () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [paymentDate, setPaymentDate] = useState<Date>()
  const [carouselApi, setCarouselApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    setCurrent(carouselApi.selectedScrollSnap() + 1)

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1)
    })
  }, [carouselApi])

  const destinations = [
    {
      name: "Hoi An",
      image: "/images/hoi-an.webp",
    },
    {
      name: "Canada",
      image: "/images/canada.webp",
    },
    {
      name: "Paris",
      image: "/images/paris.webp",
    },
    {
      name: "Australia",
      image: "/images/australia.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-green-500 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="border-2 border-gray-900 px-3 py-2 rounded-sm">
                <span className="text-sm font-semibold text-gray-900">Agency LOGO</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              <nav className="flex space-x-8">
                <a href="#" className="text-gray-800 hover:[#1D599D] font-medium text-base transition-colors">
                  Quotes
                </a>
                <a href="#" className="text-gray-800 hover:[#1D599D] font-medium text-base transition-colors">
                  Plans
                </a>
                <a href="#" className="text-gray-800 hover:[#1D599D] font-medium text-base transition-colors">
                  Groups
                </a>
                <a href="#" className="text-gray-800 hover:[#1D599D] font-medium text-base transition-colors">
                  Claims
                </a>
              </nav>

              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-sm font-medium h-34">
                Get a Quote
              </Button>

              <div className="flex items-center space-x-6">
                {/* Country Flags */}
                <div className="flex items-center space-x-4">
                  <div className="text-center flex flex-col items-center">
                    <img
                      src="/usa.png?height=20&width=30"
                      alt="USA"
                      className="w-7 h-7 object-cover rounded-full mb-1 border border-gray-200"
                    />
                    <span className="text-xs text-gray-600 font-medium">USA</span>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <img
                      src="/canada.png?height=20&width=30"
                      alt="Canada"
                      className="w-7 h-7  object-cover rounded-full mb-1 border border-gray-200"
                    />
                    <span className="text-xs text-gray-600 font-medium">Canada</span>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Bell className="w-5 h-5 text-[#1D599D]" />
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Hello Hector</div>
                    <div className="text-sm text-[#1D599D] font-medium">My Account</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        {/* Green Top Bar */}
        <div className="bg-green-500 h-2 w-full"></div>

        <div className="bg-gray-100 px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Get a Quote Button */}
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium">
              Get a Quote
            </Button>

            <div className="flex items-center space-x-4">
              {/* Notification */}
              <div className="relative">
                <Bell className="w-5 h-5 text-[#1D599D]" />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  3
                </div>
              </div>

              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1 text-gray-800">
                    <span className="font-medium">Menu</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="mt-6 space-y-6">
                    <nav className="space-y-4">
                      <a href="#" className="block text-[#1C3566] hover:text-[#1D599D] font-medium">
                        Quotes
                      </a>
                      <a href="#" className="block text-[#1C3566] hover:text-[#1D599D] font-medium">
                        Plans
                      </a>
                      <a href="#" className="block text-[#1C3566] hover:text-[#1D599D] font-medium">
                        Groups
                      </a>
                      <a href="#" className="block text-[#1C3566] hover:text-[#1D599D] font-medium">
                        Claims
                      </a>
                    </nav>

                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Get a Quote</Button>

                    <div className="border-t pt-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Hello Hector</div>
                          <div className="text-sm text-[#1D599D] font-medium">My Account</div>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <div className="text-center flex flex-col items-center">
                          <img
                            src="/usa.png?height=20&width=30"
                            alt="USA"
                            className="w-7 h-7 object-cover rounded-full mb-1 border border-gray-200"
                          />
                          <span className="text-xs text-gray-600 font-medium">USA</span>
                        </div>
                        <div className="text-center flex flex-col items-center">
                          <img
                            src="/canada.png?height=20&width=30"
                            alt="Canada"
                            className="w-7 h-7 object-cover rounded-full mb-1 border border-gray-200"
                          />
                          <span className="text-xs text-gray-600 font-medium">Canada</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Hero Banner */}
        <section className="relative pt-16">
          <div
            className="bg-cover bg-center bg-no-repeat h-[200px]"
            style={{
              backgroundImage: `url('/images/hero-background.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <div className="text-center text-white">
                <h1 className="text-3xl font-bold leading-tight">
                  Let's Get Your Trip
                  <br />
                  <span className="text-white">PROTECTED</span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Form */}
        <section className="px-4 py-8 bg-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1D599D] mb-2">Help us choose the right</h2>
            <h2 className="text-2xl font-bold text-[#1D599D]">plan for you</h2>
          </div>

          <form className="space-y-6">
            <div>
              <Label className="flex items-center text-base font-medium text-[#1C3566] mb-3">
                Destinations
                <Info className="w-4 h-4 text-gray-400 ml-2" />
              </Label>
              <div className="relative">
                <Select modal={false}>
                  <SelectTrigger className="h-14 pl-12 text-base border-2 rounded-lg">
                    <SelectValue placeholder="Austria, Bulgaria, Croatia & 2 More" />
                  </SelectTrigger>
                  <SelectContent className="w-full" side="bottom" align="start" sideOffset={4}>
                    <SelectItem value="usa" className="w-full">
                      <div className="flex items-center space-x-3 w-full">
                        <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                          <img
                            src="/usa.png?height=24&width=24"
                            alt="USA"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span>United States</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="canada" className="w-full">
                      <div className="flex items-center space-x-3 w-full">
                        <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                          <img
                            src="/canada.png?height=24&width=24"
                            alt="Canada"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span>Canada</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="europe" className="w-full">
                      <div className="flex items-center space-x-3 w-full">
                        <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                          <img
                            src="/europe.png?height=24&width=24"
                            alt="Europe"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span>Europe</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <Label className="flex items-center text-base font-medium text-[#1C3566] mb-3">
                Departure Date
                <Info className="w-4 h-4 text-gray-400 ml-2" />
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full h-14 justify-start text-left font-normal text-base border-2 rounded-lg pl-12 relative",
                      !departureDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    {departureDate ? format(departureDate, "dd/MM/yyyy") : <span>12/07/2024</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label className="flex items-center text-base font-medium text-[#1C3566] mb-3">
                Return Date
                <Info className="w-4 h-4 text-gray-400 ml-2" />
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full h-14 justify-start text-left font-normal text-base border-2 rounded-lg pl-12 relative",
                      !returnDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    {returnDate ? format(returnDate, "dd/MM/yyyy") : <span>12/07/2024</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label className="flex items-center text-base font-medium text-[#1C3566] mb-3">
                Initial Trip Payment Date
                <Info className="w-4 h-4 text-gray-400 ml-2" />
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full h-14 justify-start text-left font-normal text-base border-2 rounded-lg pl-12 relative",
                      !paymentDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    {paymentDate ? format(paymentDate, "dd/MM/yyyy") : <span>12/07/2024</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={paymentDate} onSelect={setPaymentDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label className="flex items-center text-base font-medium text-[#1C3566] mb-3">
                Traveler Details & Trip Cost
                <Info className="w-4 h-4 text-gray-400 ml-2" />
              </Label>
              <div className="relative">
                <Select modal={false}>
                  <SelectTrigger className="h-14 pl-12 text-base border-2 rounded-lg">
                    <SelectValue placeholder="2 Travelers (NJ)" />
                  </SelectTrigger>
                  <SelectContent className="w-full" side="bottom" align="start" sideOffset={4}>
                    <SelectItem value="1" className="w-full pl-3">
                      1 Traveler
                    </SelectItem>
                    <SelectItem value="2" className="w-full pl-3">
                      2 Travelers (NJ)
                    </SelectItem>
                    <SelectItem value="3" className="w-full pl-3">
                      3+ Travelers
                    </SelectItem>
                  </SelectContent>
                </Select>
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <Button className="w-full bg-[#025EB8] hover:bg-blue-700 text-white py-4 text-lg font-medium rounded-lg">
              Get a Quote
            </Button>
          </form>
        </section>

        {/* Mobile Trending Destinations */}
        <section className="px-4 py-8 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Trending Destinations</h2>

          <Carousel
            setApi={setCarouselApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2">
              {destinations.map((destination, index) => (
                <CarouselItem key={index} className="pl-2 basis-1/2">
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900">{destination.name}</h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Carousel Bullets */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(destinations.length / 2) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${Math.floor((current - 1) / 2) === index ? "bg-gray-800" : "bg-gray-300"
                  }`}
                onClick={() => carouselApi?.scrollTo(index * 2)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Desktop Hero Section */}
        <section className="relative pt-16">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/hero-background.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center ">
              {/* Hero Content */}
              <div className="text-white">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  Let's Get Your Trip
                  <br />
                  <span className="text-white text-4xl lg:text-5xl xl:text-6xl">PROTECTED</span>
                </h1>
              </div>

              {/* Quote Form */}
              <div className="lg:ml-auto">
                <Card className="w-full max-w-md bg-white shadow-xl rounded-[20px]">
                  <CardContent className="px-10 py-16">
                    <h3 className="text-xl font-semibold text-[#1D599D] mb-6">Help us choose the right plan for you</h3>

                    <form className="space-y-4">
                      <div>
                        <Label className="flex items-center text-sm font-medium text-[#1C3566] mb-2">
                          Destinations
                          <Info className="w-4 h-4 text-gray-400 ml-1" />
                        </Label>
                        <div className="relative">
                          <Select modal={false}>
                            <SelectTrigger className="pl-10">
                              <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className="w-full" side="bottom" align="start" sideOffset={4}>
                              <SelectItem value="usa">
                                <div className="flex items-center space-x-2">
                                  <div className="w-4 h-4 rounded-full overflow-hidden border border-gray-200">
                                    <img
                                      src="/usa.png?height=16&width=16"
                                      alt="USA"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <span>United States</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="canada">
                                <div className="flex items-center space-x-2">
                                  <div className="w-4 h-4 rounded-full overflow-hidden border border-gray-200">
                                    <img
                                      src="/canada.png?height=16&width=16"
                                      alt="Canada"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <span>Canada</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="europe">
                                <div className="flex items-center space-x-2">
                                  <div className="w-4 h-4 rounded-full overflow-hidden border border-gray-200">
                                    <img
                                      src="/europe.png?height=16&width=16"
                                      alt="Europe"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <span>Europe</span>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="flex items-center text-sm font-medium text-[#1C3566] mb-2">
                            Departure Date
                            <Info className="w-4 h-4 text-gray-400 ml-1" />
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal pl-10 relative",
                                  !departureDate && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={departureDate}
                                onSelect={setDepartureDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div>
                          <Label className="flex items-center text-sm font-medium text-[#1C3566] mb-2">
                            Return Date
                            <Info className="w-4 h-4 text-gray-400 ml-1" />
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal pl-10 relative",
                                  !returnDate && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>

                      <div>
                        <Label className="flex items-center text-sm font-medium text-[#1C3566] mb-2">
                          Initial Trip Payment Date
                          <Info className="w-4 h-4 text-gray-400 ml-1" />
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal pl-10 relative",
                                !paymentDate && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              {paymentDate ? format(paymentDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={paymentDate} onSelect={setPaymentDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label className="flex items-center text-sm font-medium text-[#1C3566] mb-2">
                          Traveler Details & Trip Cost
                          <Info className="w-4 h-4 text-gray-400 ml-1" />
                        </Label>
                        <div className="relative">
                          <Select modal={false}>
                            <SelectTrigger className="pl-10">
                              <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className="w-full" side="bottom" align="start" sideOffset={4}>
                              <SelectItem value="1">1 Traveler</SelectItem>
                              <SelectItem value="2">2 Travelers</SelectItem>
                              <SelectItem value="3">3+ Travelers</SelectItem>
                            </SelectContent>
                          </Select>
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                      </div>

                      <Button className="w-full bg-[#025EB8] hover:bg-blue-700 text-white py-3 text-lg font-medium">
                        Get a Quote
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Trending Destinations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Trending Destinations</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900">{destination.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
