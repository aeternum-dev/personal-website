import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoWhite from "@/assets/logo_long_goldman_white.png";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const creativityItems = [
  { name: "Guitar", path: "/guitar" },
  { name: "Poetry", path: "/poetry" },
  { name: "Photography", path: "/photography" },
  { name: "TikTok Videos", path: "/tiktok-videos" },
];

const favoritesItems = [
  { name: "People", path: "/people" },
  { name: "Books", path: "/books" },
  { name: "Papers", path: "/papers" },
  { name: "Websites", path: "/websites" },
  { name: "Tools", path: "/tools" },
];

export default function Header() {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [creativityOpen, setCreativityOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  return (
    <header className="flex flex-row items-center bg-header top-0 w-full h-16 justify-between px-5 md:px-10 lg:px-20 sticky z-50">
      {/* Mobile Logo */}
      <Link to="/" className="flex md:hidden">
        <img src={logoWhite} alt="Szabolcs Terjék" className="h-5" />
      </Link>

      {/* Mobile Menu Button */}
      <Menu
        className="flex md:hidden cursor-pointer text-header-foreground hover:text-accent transition-colors"
        onClick={() => setSideMenu(true)}
        size={24}
      />

      {/* Mobile Side Menu */}
      <section
        className={`sidemenu z-50 fixed w-screen h-screen bg-header top-0 right-0 items-center justify-center origin-right ${
          isSideMenuOpen ? "flex animate-open-menu" : "hidden"
        }`}
      >
        <X
          size={40}
          className="fixed top-5 right-5 text-header-foreground cursor-pointer hover:text-accent transition-colors"
          onClick={() => setSideMenu(false)}
        />
        <nav className="flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <Link
            className="font-medium text-xl text-header-foreground hover:text-accent transition-colors"
            onClick={() => setSideMenu(false)}
            to="/"
          >
            Home
          </Link>
          <Link
            className="font-medium text-xl text-header-foreground hover:text-accent transition-colors"
            onClick={() => setSideMenu(false)}
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="font-medium text-xl text-header-foreground hover:text-accent transition-colors"
            onClick={() => setSideMenu(false)}
            to="/projects"
          >
            Projects
          </Link>
          
          {/* Mobile Creativity Section */}
          <div className="border-t border-header-foreground/20 pt-4 mt-2">
            <span className="text-header-foreground/60 text-sm uppercase tracking-wider mb-3 block">
              Creativity
            </span>
            {creativityItems.map((item) => (
              <Link
                key={item.path}
                className="font-medium text-lg text-header-foreground hover:text-accent transition-colors block py-1"
                onClick={() => setSideMenu(false)}
                to={item.path}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Favorites Section */}
          <div className="border-t border-header-foreground/20 pt-4 mt-2">
            <span className="text-header-foreground/60 text-sm uppercase tracking-wider mb-3 block">
              Favorites
            </span>
            {favoritesItems.map((item) => (
              <Link
                key={item.path}
                className="font-medium text-lg text-header-foreground hover:text-accent transition-colors block py-1"
                onClick={() => setSideMenu(false)}
                to={item.path}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <Link
            className="font-medium text-xl text-header-foreground hover:text-accent transition-colors mt-4 border-t border-header-foreground/20 pt-4"
            onClick={() => setSideMenu(false)}
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </section>

      {/* Desktop Logo */}
      <Link to="/" className="hidden md:flex">
        <img src={logoWhite} alt="Szabolcs Terjék" className="h-6" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-row gap-6 items-center">
        <Link 
          className="font-medium text-header-foreground hover:text-accent transition-colors" 
          to="/blog"
        >
          Blog
        </Link>
        <Link 
          className="font-medium text-header-foreground hover:text-accent transition-colors" 
          to="/projects"
        >
          Projects
        </Link>
        
        {/* Creativity Dropdown */}
        <DropdownMenu open={creativityOpen} onOpenChange={setCreativityOpen}>
          <DropdownMenuTrigger 
            className="flex items-center gap-1 font-medium text-header-foreground hover:text-accent transition-colors outline-none"
            onMouseEnter={() => setCreativityOpen(true)}
          >
            Creativity
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="start" 
            sideOffset={0}
            className="bg-header border-header-foreground/20 min-w-[160px] z-50"
            onMouseEnter={() => setCreativityOpen(true)}
            onMouseLeave={() => setCreativityOpen(false)}
          >
            {creativityItems.map((item) => (
              <DropdownMenuItem key={item.path} asChild>
                <Link 
                  to={item.path}
                  className="text-header-foreground hover:text-accent hover:bg-header-foreground/10 cursor-pointer font-medium py-2"
                  onClick={() => setCreativityOpen(false)}
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Favorites Dropdown */}
        <DropdownMenu open={favoritesOpen} onOpenChange={setFavoritesOpen}>
          <DropdownMenuTrigger 
            className="flex items-center gap-1 font-medium text-header-foreground hover:text-accent transition-colors outline-none"
            onMouseEnter={() => setFavoritesOpen(true)}
          >
            Favorites
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="start" 
            sideOffset={0}
            className="bg-header border-header-foreground/20 min-w-[160px] z-50"
            onMouseEnter={() => setFavoritesOpen(true)}
            onMouseLeave={() => setFavoritesOpen(false)}
          >
            {favoritesItems.map((item) => (
              <DropdownMenuItem key={item.path} asChild>
                <Link 
                  to={item.path}
                  className="text-header-foreground hover:text-accent hover:bg-header-foreground/10 cursor-pointer font-medium py-2"
                  onClick={() => setFavoritesOpen(false)}
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Contact Button */}
      <Button
        asChild
        className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
      >
        <Link to="/contact">Contact</Link>
      </Button>
    </header>
  );
}
