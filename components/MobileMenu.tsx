import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit md:hidden" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href="#"
              className="hover:text-accent-foreground w-full transition-all duration-75"
            >
              How it works
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="#"
              className="hover:text-accent-foreground w-full transition-all duration-75"
            >
              Pricing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="#"
              className="hover:text-accent-foreground w-full transition-all duration-75"
            >
              About
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
