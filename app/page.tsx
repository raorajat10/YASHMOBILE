"use client";
<Head>
  <title>Yash Mobile - Best Mobile Shop in Jaipur</title>
  <meta name="description" content="Yash Mobile offers the best deals on smartphones, accessories, and repair services in Jaipur. Visit us for genuine products, affordable prices, and excellent customer support." />
  <meta name="keywords" content="Yash Mobile, mobile shop Jaipur, buy smartphones, mobile accessories, phone repair Jaipur" />
  <meta name="author" content="Yash Mobile" />
  <meta property="og:title" content="Yash Mobile - Best Mobile Shop in Jaipur" />
  <meta property="og:description" content="Buy smartphones, accessories, and get repair services at Yash Mobile in Jaipur. Quality service you can trust." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yashmobile.shop/" />
  <meta property="og:image" content="https://yashmobile.shop/og-image.jpg" />
  <link rel="canonical" href="https://yashmobile.shop/" />
</Head>
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Star,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Award,
  Users,
  Heart,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useScrollDropIn } from "@/components/IntersectionObserver";
import Head from "next/head";

export default function YashMobilePortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentShowroomSlide, setCurrentShowroomSlide] = useState(0);
  const [counters, setCounters] = useState({
    customers: 0,
    clients: 0,
    products: 0,
    years: 0,
  });

  // Add these new state variables after the existing useState declarations
  const [currentBrandSlide, setCurrentBrandSlide] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllAwards, setShowAllAwards] = useState(false);
  const [showStoreFeatures, setShowStoreFeatures] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const showroomRef = useRef<HTMLElement>(null);
  const awardsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // HD Mobile Products with realistic images
  const mobileProducts = [
    {
      name: "iPhone 16 Pro Max",
      image: "16promax.webp",
      rating: 5,
      features: ["A17 Pro Chip", "48MP Camera", "Titanium Build"],
    },
    {
      name: "Samsung Galaxy S25 Ultra",
      image: "S25ultra.jpg",
      rating: 5,
      features: ["S Pen", "200MP Camera", "AI Features"],
    },
    {
      name: "Samsung Galaxy Z Fold 7",
      image: "fold7.webp",
      rating: 4,
      features: ["Magic Eraser", "Pure Android", "AI Photography"],
    },
    {
      name: "OnePlus 13 R & S",
      image:
        "1+pro.webp",
      rating: 4,
      features: ["Snapdragon 8 Gen 3", "100W Charging", "Hasselblad Camera"],
    },
    {
      name: "Oppo F27 Pro+",
      image:
        "f27pro+.webp",
      rating: 5,
      features: ["Adoby Camera", "Wireless Charging", "Premium Build"],
    },
    {
      name: "Nothing Phone (3a) Pro",
      image: "nothng3.webp",
      rating: 4,
      features: ["Glyph Interface", "Clean Android", "Unique Design"],
    },
    {
      name: "Motorola Moto flip",
      image: "motoflp.webp",
      rating: 4,
      features: ["Glyph Interface", "Clean Android", "Unique Design"],
    },
  ];

  const testimonials = [
    {
      name: "Vikas Jatwa",
      rating: 5,
      comment:
        "Excellent service and genuine products. YashMobile is my go-to store for all mobile needs!",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocIMT61-WwrghA4WIQBkmyk-0orhMHdCStVyq6GpcmNVYJ_t4g=w36-h36-p-rp-mo-br100",
    },
    {
      name: "Vishnu Choudhary",
      rating: 5,
      comment:
        "Good place for buy any digital products, Good service after sell and Good staff behaviour!",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVeFOQcP6q2g1NRSqZLE8DPE-1ExI7cV6Nrly14hYLBy07g2DxK=w36-h36-p-rp-mo-br100",
    },
    {
      name: "Amit Kumar",
      rating: 5,
      comment:
        "Very best place for buy any digital products Good behavior all staf....",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVEEfbDEzjUQTD1sBTFvQCtWLoZKU_i8e6hUe80w43FaRvDfLk=w36-h36-p-rp-mo-br100",
    },
    {
      name: "Himmat Singh",
      rating: 5,
      comment:
        "Professional service and competitive prices. Love shopping here!",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocI8u3FszoHnWoqNlqtNxmz61AuM2tmTn5SQAe1AJY5wMoSdTWQ=w36-h36-p-rp-mo-br100",
    },
  ];

  const showroomImages = [
    "about1.webp",
    "about2.webp",
    "about3.jpg",
    "about6.webp",
    "about7.webp",
  ];

  const reviews = [
    "Best mobile store in the city! 📱",
    "Genuine products, great service ⭐",
    "Amazing collection of smartphones 🔥",
    "Professional and friendly staff 👍",
    "Quick repair services available 🔧",
    "Competitive prices, quality assured ✅",
    "Trusted by thousands of customers 💯",
    "Latest models always in stock 📲",
  ];

  // Add brands data after the existing data arrays
  const brands = [
    {
      name: "Apple",
      logo: "16promax.webp",
      description: "iPhone, iPad, MacBook",
      models: "15+ Models Available",
    },
    {
      name: "Samsung",
      logo: "S25ultra.jpg",
      description: "Galaxy Series, Note Series",
      models: "25+ Models Available",
    },
    {
      name: "Vivo",
      logo: "x200pro.webp",
      description: "Vivo Series",
      models: "24+ Models Available",
    },
    {
      name: "OnePlus",
      logo: "1+pro.webp",
      description: "OnePlus Series",
      models: "4+ Models Available",
    },
    {
      name: "Techno",
      logo: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=200&h=200&fit=crop",
      description: "Tecno Series",
      models: "10+ Models Available",
    },
    {
      name: "Nothing",
      logo: "nothng3.webp",
      description: "Nothing Phone Series",
      models: "3+ Models Available",
    },
    {
      name: "Motorola",
      logo: "motoflp.webp",
      description: "Moto Series",
      models: "20+ Models Available",
    },
    {
      name: "Oppo",
      logo: "reno14pro.webp",
      description: "Find, Reno Series",
      models: "18+ Models Available",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-in-from-top");
          entry.target.classList.remove("opacity-0", "translate-y-20");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Auto-slide for mobile showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mobileProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [mobileProducts.length]);

  // Auto-slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Auto-slide for showroom
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShowroomSlide((prev) => (prev + 1) % showroomImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showroomImages.length]);

  // Add auto-slide for brands after the existing useEffect hooks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandSlide((prev) => (prev + 1) % Math.ceil(brands.length / 4));
    }, 3000);
    return () => clearInterval(interval);
  }, [brands.length]);

  // Animated counters with intersection observer
  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        customers: 100000,
        clients: 15000,
        products: 500,
        years: 17,
      };
      const duration = 2000;
      const steps = 60;

      Object.keys(targets).forEach((key) => {
        const target = targets[key as keyof typeof targets];
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, duration / steps);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mobileProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + mobileProducts.length) % mobileProducts.length
    );
  };

  // Add these functions after the existing slider functions
  const nextBrandSlide = () => {
    setCurrentBrandSlide((prev) => (prev + 1) % Math.ceil(brands.length / 4));
  };

  const prevBrandSlide = () => {
    setCurrentBrandSlide(
      (prev) =>
        (prev - 1 + Math.ceil(brands.length / 4)) % Math.ceil(brands.length / 4)
    );
  };

  //fuction for open close showroom
  function isShowroomOpen() {
    const now = new Date();

    // Check if it is the last day of the month
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const isLastDayOfMonth = tomorrow.getDate() === 1;
    if (isLastDayOfMonth) {
      return false; // Closed on last day of month
    }

    // Time-based check
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const openTime = 8 * 60 + 30; // 8:30 AM in minutes
    const closeTime = 20 * 60 + 45; // 8:45 PM in minutes

    return currentMinutes >= openTime && currentMinutes <= closeTime;
  }
const [dropRef, isVisible] = useScrollDropIn();
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between  px-20 md:px-10 py-3">
            {/* Animated Logo */}
             <div className="w-16 h-16 md:w-20 md:h-20  relative font-bold animate-bounce-subtle">
  <img
    src="/Y-unscreen.gif"
    alt="Yash Mobile Logo"
    className=" object-contain"
     />
</div>
            <div className="flex items-center space-x-4">
             {/* <div className="w-20 h-20 md:w-16 md:h-16  relative font-bold">
  <img
    src="/Y-unscreen.gif"
    alt="Yash Mobile Logo"
    className=" object-contain"
     />
</div> */}

              {/* <div className="animated-logo text-xl font-bold">
                <span className="letter">Y</span>
                <span className="letter">a</span>
                <span className="letter">s</span>
                <span className="letter">h</span>
                <span className="letter">M</span>
                <span className="letter">o</span>
                <span className="letter">b</span>
                <span className="letter">i</span>
                <span className="letter">l</span>
                <span className="letter">e</span>
              </div> */}
            </div>

            {/* Action Buttons */}
             <div className="flex  space-x-2">
                    <a
                      href="#home"
                      className="text-lg text-white hover:text-blue-400 transition-colors md:hover:text-blue-400 hidden "
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="text-lg text-white hover:text-blue-400 transition-colors md:hover:text-blue-400 hidden"
                    >
                      About
                    </a>
                    <a
                      href="#showcase"
                      className="text-lg text-white hover:text-blue-400 transition-colors md:hover:text-blue-400 hidden"
                    >
                      Showcase
                    </a>
                    <a
                      href="#contact"
                      className="text-lg text-white hover:text-blue-400 transition-colors md:hover:text-blue-400 hidden"
                    >
                      Contact
                    </a>
                  </div>
            <div className="flex items-center space-x-4">
              
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2 animate-bounce-subtle"
                onClick={() =>
                  window.open("https://wa.me/919876543210", "_blank")
                }
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2 animate-bounce-subtle"
                onClick={() => window.open("tel:+919876543210", "_blank")}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call</span>
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-black border-gray-800">
                  <div className="flex flex-col space-y-6 mt-8">
                    <a
                      href="#home"
                      className="text-lg text-white hover:text-blue-400 transition-colors md:hover:text-blue-400 "
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="text-lg text-white hover:text-blue-400 transition-colors md:hover:text-blue-400 "
                    >
                      About
                    </a>
                    <a
                      href="#showcase"
                      className="text-lg text-white hover:text-blue-400 transition-colors md:hover:text-blue-400 "
                    >
                      Showcase
                    </a>
                    <a
                      href="#contact"
                      className="text-lg text-white hover:text-blue-400 transition-colors md:hover:text-blue-400 "
                    >
                      Contact
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background GIF */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background with GIF effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div
            className="absolute inset-0 opacity-30 animate-pulse-slow"
            style={{
              backgroundImage: `url('background.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
        </div>

        {/* Floating Elements */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-float-1"></div>
          <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-40 animate-float-2"></div>
          <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-cyan-500 rounded-full opacity-50 animate-float-3"></div>
          <div className="floating-element absolute top-60 left-1/2 w-5 h-5 bg-pink-500 rounded-full opacity-30 animate-float-4"></div>
          <div className="floating-element absolute bottom-60 right-10 w-4 h-4 bg-yellow-500 rounded-full opacity-40 animate-float-5"></div>
        </div> */}

        <div className="relative z-10 md:z-0 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-hero-entrance">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              YashMobile
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in-delayed">
              Premium Mobile Showroom
            </p>
            <p className="text-sm md:text-base mb-12 text-gray-400 max-w-xl mx-auto animate-fade-in-delayed-2">
              Discover the latest smartphones, premium accessories, and
              exceptional service
            </p>
            <Button  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold animate-button-glow">
              <a href="#showcase">Explore Collection</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section with Background Video Effect */}
      <section
        ref={aboutRef}
        id="about"
        className="py-20 px-4 relative scroll-animate opacity-0 translate-y-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-black/80"></div>
        {/* <div
          className="absolute inset-0 opacity-20 animate-ken-burns"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div> */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              About YashMobile
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              With over 17 years of excellence in the mobile industry,
              YashMobile has been the trusted destination for premium
              smartphones and exceptional customer service.
            </p>
          </div>

          {/* Stats Counter with Motion */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center animate-counter-up">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 animate-number-glow">
                {counters.customers.toLocaleString()}+
              </div>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div className="text-center animate-counter-up">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 animate-number-glow">
                {counters.clients.toLocaleString()}+
              </div>
              <p className="text-gray-400">Satisfied Clients</p>
            </div>
            <div className="text-center animate-counter-up">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 animate-number-glow">
                {counters.products}+
              </div>
              <p className="text-gray-400">Products Available</p>
            </div>
            <div className="text-center animate-counter-up">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 animate-number-glow">
                {counters.years}+
              </div>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>

          {/* Collection GIF */}
          <div className="flex flex-raw wrap justify-center items-center space-x-4 mb-16">
            <div>
              <div className="text-center mb-12">
                <div className="relative inline-block animate-float-gentle">
                  <Image
                    src="new.gif"
                    alt="YashMobile Collection"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl animate-image-glow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-sm md:text-xl font-bold">
                      Our Premium Collection
                    </h3>
                    <p className="text-xs text-gray-300">
                      Latest smartphones & accessories
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Play className="w-8 h-8 text-white animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <div className="relative inline-block animate-float-gentle">
                <Image
                  src="flip.gif"
                  alt="YashMobile Collection"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl animate-image-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-sm md:text-xl font-bold">Our Premium Collection</h3>
                  <p className="text-xs text-gray-300">
                    Latest smartphones & accessories
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <Play className="w-8 h-8 text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Showcase Slider with HD Images */}
      <section
        ref={showcaseRef}
        id="showcase"
        className="py-20 px-4 relative scroll-animate opacity-0 translate-y-20"
        
      >
        <div
          className="absolute inset-0 opacity-10 animate-parallax"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1920&h=1080&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              Mobile Showcase
            </h1>
            <p className="text-gray-400 text-lg">
              Explore our curated collection of premium smartphones
            </p>
          </div>

          {/* Mobile Slider with Flying Cards */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {mobileProducts.map((phone, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-gray-900/50  border-gray-700 mx-4 backdrop-blur-sm animate-card-float">
                      <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div className="relative animate-image-hover">
                            <Image
                              src={phone.image || "/placeholder.svg"}
                              alt={phone.name}
                              width={400}
                              height={600}
                              className="w-full h-96 object-cover rounded-lg animate-image-glow"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                          </div>
                          <div className="animate-content-slide">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white animate-text-glow">
                              {phone.name}
                            </h3>
                            <div className="flex items-center mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 animate-star-twinkle ${
                                    i < phone.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-600"
                                  }`}
                                  style={{ animationDelay: `${i * 0.1}s` }}
                                />
                              ))}
                            </div>
                            <div className="mb-6">
                              {phone.features.map((feature, i) => (
                                <div
                                  key={i}
                                  className="flex items-center mb-2 animate-feature-slide"
                                  style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                                  <span className="text-gray-300">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                            {/* <p className="text-3xl font-bold text-blue-400 mb-6 animate-price-glow">{phone.price}</p> */}
                            {/* <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 animate-button-glow">
                              View Details
                            </Button> */}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            {/* <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 animate-control-glow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 animate-control-glow"
            >
              <ChevronRight className="w-6 h-6" />
            </button> */}

            {/* Slider Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {mobileProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 animate-indicator-pulse ${
                    index === currentSlide ? "bg-blue-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Marquee with Motion */}
      <section className="py-12 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-5 animate-bg-drift"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=400&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="marquee-container">
          <div className="marquee-content marquee-left">
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="marquee-item  animate-marquee-glow">
                <span className="text-lg text-gray-300">{review}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-container mt-4">
          <div className="marquee-content marquee-right">
            {[...reviews.reverse(), ...reviews].map((review, index) => (
              <div key={index} className="marquee-item animate-marquee-glow">
                <span className="text-lg text-gray-300">{review}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black scroll-animate opacity-0 translate-y-20"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              Our Services
            </h1>
            <p className="text-gray-400 text-lg">
              Comprehensive mobile solutions and premium customer service
            </p>
          </div>

          {/* Services Section - Mobile Dropdown */}
          <div className="block md:hidden">
            <div className="space-y-4">
              {/* First Service Card - Always Visible */}
              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm animate-service-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4 animate-icon-bounce group-hover:animate-icon-spin">
                    📱
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors animate-text-glow">
                    Mobile Sales
                  </h3>
                  <p className="text-gray-400">
                    Latest smartphones from all major brands
                  </p>
                </CardContent>
              </Card>

              {/* Dropdown Services */}
              <div
                className={`space-y-4  transition-all duration-500 ease-in-out ${
                  showAllServices
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {[
                  {
                    title: "Repair Services",
                    description: "Professional repair and maintenance",
                    icon: "🔧",
                  },
                  {
                    title: "Accessories",
                    description: "Premium cases, chargers, and more",
                    icon: "🎧",
                  },
                  {
                    title: "Trade-in",
                    description: "Best value for your old devices",
                    icon: "🔄",
                  },
                  {
                    title: "EMI Options",
                    description: "Flexible payment plans to suit your budget",
                    icon: "💳",
                  },
                  {
                    title: "Support",
                    description: "24/7 customer support and guidance",
                    icon: "💬",
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm animate-service-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4 animate-icon-bounce group-hover:animate-icon-spin">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors animate-text-glow">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Show More Button */}
              <Button
                onClick={() => setShowAllServices(!showAllServices)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 animate-button-glow"
              >
                {showAllServices ? "Show Less Services" : "Show All Services"}
                <ChevronRight
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                    showAllServices ? "rotate-90" : ""
                  }`}
                />
              </Button>
            </div>
          </div>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mobile Sales",
                description: "Latest smartphones from all major brands",
                icon: "📱",
              },
              {
                title: "Repair Services",
                description: "Professional repair and maintenance",
                icon: "🔧",
              },
              {
                title: "Accessories",
                description: "Premium cases, chargers, and more",
                icon: "🎧",
              },
              {
                title: "Trade-in",
                description: "Best value for your old devices",
                icon: "🔄",
              },
              {
                title: "Emi Options",
                description: "Flexible payment plans to suit your budget",
                icon: "💳",
              },
              {
                title: "Support",
                description: "24/7 customer support and guidance",
                icon: "💬",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm animate-service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 animate-icon-bounce group-hover:animate-icon-spin">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors animate-text-glow">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section
        ref={testimonialsRef}
        className="py-20 px-4 scroll-animate opacity-0 translate-y-20"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              What Our Customers Say
            </h1>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm mx-4 animate-testimonial-float">
                      <CardContent className="p-8 text-center">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 rounded-full mx-auto mb-4 animate-avatar-glow"
                        />
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 animate-star-twinkle ${
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-600"
                              }`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                        <p className="text-lg text-gray-300 mb-4 italic animate-text-fade">
                          "{testimonial.comment}"
                        </p>
                        <h4 className="text-xl font-semibold text-white animate-text-glow">
                          {testimonial.name}
                        </h4>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 animate-indicator-pulse ${
                    index === currentTestimonial ? "bg-blue-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Photos Carousel */}
      <section
        ref={showroomRef}
        className="py-20 px-4 scroll-animate opacity-0 translate-y-20"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              Visit Our Showroom
            </h1>
            <p className="text-gray-400 text-lg">
              Experience our premium mobile collection in person
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentShowroomSlide * 100}%)`,
                }}
              >
                {showroomImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Showroom ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-96 object-cover animate-image-glow"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {showroomImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentShowroomSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 animate-indicator-pulse ${
                    index === currentShowroomSlide
                      ? "bg-blue-400"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Deal With Carousel */}
      <section className="py-20 px-4 relative scroll-animate opacity-0 translate-y-20">
        <div
          className="absolute inset-0 opacity-10 animate-bg-drift"
          style={{
            backgroundImage: `url('back.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              Brands We Deal With
            </h1>
            <p className="text-gray-400 text-lg">
              Authorized dealer for all major smartphone brands
            </p>
          </div>

          {/* Brands Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentBrandSlide * 100}%)`,
                }}
              >
                {Array.from({ length: Math.ceil(brands.length / 4) }).map(
                  (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                        {brands
                          .slice(slideIndex * 4, slideIndex * 4 + 4)
                          .map((brand, index) => (
                            <Card
                              key={index}
                              className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm animate-brand-card"
                              style={{ animationDelay: `${index * 0.1}s` }}
                            >
                              <CardContent className="p-6 text-center">
                                <div className="relative mb-4 animate-brand-logo">
                                  <Image
                                    src={brand.logo || "/placeholder.svg"}
                                    alt={brand.name}
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 mx-auto rounded-lg object-cover animate-image-glow group-hover:animate-brand-spin"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors animate-text-glow">
                                  {brand.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-2">
                                  {brand.description}
                                </p>
                                <p className="text-blue-400 text-xs font-semibold animate-models-glow">
                                  {brand.models}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevBrandSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 animate-control-glow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextBrandSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 animate-control-glow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(brands.length / 4) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBrandSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 animate-indicator-pulse ${
                      index === currentBrandSlide
                        ? "bg-blue-400"
                        : "bg-gray-600"
                    }`}
                  />
                )
              )}
            </div>
          </div>

          {/* Brand Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center animate-brand-stat">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 animate-number-glow">
                8+
              </div>
              <p className="text-gray-400">Major Brands</p>
            </div>
            <div className="text-center animate-brand-stat">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2 animate-number-glow">
                150+
              </div>
              <p className="text-gray-400">Models Available</p>
            </div>
            <div className="text-center animate-brand-stat">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 animate-number-glow">
                100%
              </div>
              <p className="text-gray-400">Authorized Dealer</p>
            </div>
            <div className="text-center animate-brand-stat">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2 animate-number-glow">
                24/7
              </div>
              <p className="text-gray-400">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section
        ref={awardsRef}
        className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black scroll-animate opacity-0 translate-y-20"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              Awards & Recognition
            </h1>
            <p className="text-gray-400 text-lg">
              Trusted by thousands, recognized by industry leaders
            </p>
          </div>

          {/* Awards Section - Mobile Dropdown */}
          <div className="block md:hidden">
            <div className="space-y-4">
              {/* First Award Card - Always Visible */}
              <Card className="bg-gray-800/50 border-gray-700 text-center group hover:border-yellow-500/50 transition-all duration-300 animate-award-card">
                <CardContent className="p-6">
                  <div className="text-yellow-400 mb-4 flex justify-center group-hover:animate-icon-spin animate-icon-glow">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white animate-text-glow">
                    Best Mobile Store 2024 In Ajmer Highway
                  </h3>
                </CardContent>
              </Card>

              {/* Dropdown Awards */}
              <div
                className={`space-y-4 transition-all duration-500 ease-in-out ${
                  showAllAwards
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {[
                  {
                    title: "Customer Choice Award",
                    icon: <Users className="w-8 h-8" />,
                  },
                  {
                    title: "Excellence in Service",
                    icon: <Star className="w-8 h-8" />,
                  },
                  {
                    title: "Trusted Retailer",
                    icon: <Heart className="w-8 h-8" />,
                  },
                ].map((award, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/50 border-gray-700 text-center group hover:border-yellow-500/50 transition-all duration-300 animate-award-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="text-yellow-400 mb-4 flex justify-center group-hover:animate-icon-spin animate-icon-glow">
                        {award.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white animate-text-glow">
                        {award.title}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Show More Button */}
              <Button
                onClick={() => setShowAllAwards(!showAllAwards)}
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white py-3 animate-button-glow"
              >
                {showAllAwards ? "Show Less Awards" : "Show All Awards"}
                <ChevronRight
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                    showAllAwards ? "rotate-90" : ""
                  }`}
                />
              </Button>
            </div>
          </div>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Best Mobile Store 2024 In Ajmer Highway",
                icon: <Award className="w-8 h-8" />,
              },
              {
                title: "Customer Choice Award",
                icon: <Users className="w-8 h-8" />,
              },
              {
                title: "Excellence in Service",
                icon: <Star className="w-8 h-8" />,
              },
              {
                title: "Trusted Retailer",
                icon: <Heart className="w-8 h-8" />,
              },
            ].map((award, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 text-center group hover:border-yellow-500/50 transition-all duration-300 animate-award-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-yellow-400 mb-4 flex justify-center group-hover:animate-icon-spin animate-icon-glow">
                    {award.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white animate-text-glow">
                    {award.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-20 px-4 scroll-animate opacity-0 translate-y-20"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              Get In Touch
            </h1>
            <p className="text-gray-400 text-lg">
              Visit our showroom or contact us for the best mobile experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm animate-contact-card">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4 animate-icon-glow" />
                <h3 className="text-lg font-semibold mb-2 animate-text-glow">
                  Call Us
                </h3>
                <p className="text-gray-400">+91 761-9740000</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm animate-contact-card">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 animate-icon-glow" />
                <h3 className="text-lg font-semibold mb-2 animate-text-glow">
                  Email
                </h3>
                <p className="text-gray-400">yashmobilebkb@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm animate-contact-card">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4 animate-icon-glow" />
                <h3 className="text-lg font-semibold mb-2 animate-text-glow">
                  Visit Us
                </h3>
                <p className="text-gray-400">BadKeBalaji, Ajmer Road, Jaipur, Rajasthan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black scroll-animate opacity-0 translate-y-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
              Find Our Store
            </h1>
            <p className="text-gray-400 text-lg">
              Visit us at our convenient location in the heart of the tech
              district
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Store Information */}
            <div className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm animate-location-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-8 h-8 text-blue-400 mt-1 animate-icon-glow" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 animate-text-glow">
                        Store Address
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        YashMobile Showroom
                        <br />
                        BadKeBalaji, Ajmer Road, Jaipur, Rajasthan
                        <br />
                        Jaipur-Kishangarh Road - 302026
                        <br />
                        Near ShivMandir,SarangPura Road
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm animate-location-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-8 h-8 text-green-400 mt-1 animate-icon-glow" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 animate-text-glow">
                        Contact Information
                      </h3>
                      <p className="text-gray-300 mb-2">📞 +91 761-9740000</p>
                      <p className="text-gray-300 mb-2">
                        📧 yashmobilebkb@gmail.com
                      </p>
                      <p className="text-gray-300">
                        🕒 Mon-Sun: 8:30 AM - 9:00 PM : last-day-month = Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm animate-location-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 animate-text-glow">
                    How to Reach
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>1 minutes walk from BadKeBalaji Bus Stand</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span>Free parking available for customers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span>Located in the main Heighway market</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Easy access by bus,car</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 animate-button-glow"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7041301797167!2d75.63330217461935!3d26.849361276684885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4a3173d057f7%3A0x790838ce0e135887!2sYASH%20MOBILE%20NEW!5e0!3m2!1sen!2sin!4v1750984178405!5m2!1sen!2sin",
                      "_blank"
                    )
                  }
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 animate-button-glow"
                  onClick={() => window.open("tel:+917619740000", "_blank")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Store
                </Button>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-map-glow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7041301797167!2d75.63330217461935!3d26.849361276684885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4a3173d057f7%3A0x790838ce0e135887!2sYASH%20MOBILE%20NEW!5e0!3m2!1sen!2sin!4v1750984178405!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 rounded-2xl"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
              </div>

              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <Card className="bg-black/80 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold animate-text-glow">
                          YashMobile Showroom
                        </h4>
                        <p className="text-gray-300 text-sm">
                          BadKeBalaji, Ajmer Road, Jaipur
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        
                        <span
                          className={`text-sm font-semibold ${
                            isShowroomOpen() ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {isShowroomOpen() ? "Open Now" : "Closed"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Store Features - Mobile Dropdown */}
          <div className="block md:hidden mt-16">
            <div className="space-y-4">
              {/* First Feature Card - Always Visible */}
              <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300 animate-store-feature">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🅿️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Free Parking
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Complimentary parking space for all customers
                  </p>
                </CardContent>
              </Card>

              {/* Dropdown Features */}
              <div
                className={`space-y-4 transition-all duration-500 ease-in-out ${
                  showStoreFeatures
                    ? "max-h-[800px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300 animate-store-feature">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">🚇</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Bus Access
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Just 1 minutes walk from Bus Stand BadKeBalaji
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300 animate-store-feature">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">🛡️</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Safe Location
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Secure area with 24/7 security coverage
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Show More Button */}
              <Button
                onClick={() => setShowStoreFeatures(!showStoreFeatures)}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 animate-button-glow"
              >
                {showStoreFeatures
                  ? "Show Less Features"
                  : "Show Store Features"}
                <ChevronRight
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                    showStoreFeatures ? "rotate-90" : ""
                  }`}
                />
              </Button>
            </div>
          </div>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300 animate-store-feature">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🅿️</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Free Parking
                </h3>
                <p className="text-gray-400 text-sm">
                  Complimentary parking space for all customers
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300 animate-store-feature">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚇</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Bus Access
                </h3>
                <p className="text-gray-400 text-sm">
                  Just 1 minutes walk from metro station
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300 animate-store-feature">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Safe Location
                </h3>
                <p className="text-gray-400 text-sm">
                  Secure area with 24/7 security coverage
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold animate-pulse-glow">
                  YM
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  YashMobile
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for premium mobile solutions and
                exceptional customer service.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About Us
                </a>
                <a
                  href="#showcase"
                  className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Products
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/yashmobilejpr?igsh=MW8xejJmNjVxa3dwcw==" target="_blank" rel="noopener noreferrer">
                  <button className="text-gray-400 hover:text-blue-400 transition-colors animate-social-bounce">
                    <Instagram className="w-6 h-6" />
                  </button>
                </a>
                <a href="https://facebook.com/YashMobiles" target="_blank" rel="noopener noreferrer">
                  <button className="text-gray-400 hover:text-blue-400 transition-colors animate-social-bounce">
                    <Facebook className="w-6 h-6" />
                  </button>
                </a>
                <a href="https://twitter.com/yashmobilebkb" target="_blank" rel="noopener noreferrer">
                  <button className="text-gray-400 hover:text-blue-400 transition-colors animate-social-bounce">
                    <Twitter className="w-6 h-6" />
                  </button>
                </a>
                <a href="https://www.linkedin.com/company/yashmobilebkb" target="_blank" rel="noopener noreferrer">
                  <button className="text-gray-400 hover:text-blue-400 transition-colors animate-social-bounce">
                    <Linkedin className="w-6 h-6" />
                  </button>
                </a>
                <a href="https://www.youtube.com/channel/UC123456789" target="_blank" rel="noopener noreferrer">
                  <button className="text-gray-400 hover:text-blue-400 transition-colors animate-social-bounce">
                    <Youtube className="w-6 h-6" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 YashMobile. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
