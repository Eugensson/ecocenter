"use client";

import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  icon: IconType;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, icon: Icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none flex items-center gap-2">
              <Icon size={20} className="text-green-900 dark:text-green-500" />
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-2">
        {navLinks.map(({ label, href, subLinks, icon }) => {
          const Icon = icon;

          if (label === "Послуги") {
            return (
              <NavigationMenuItem
                key={href}
                className={cn(
                  "flex items-center gap-2 font-semibold",
                  navigationMenuTriggerStyle()
                )}
              >
                <NavigationMenuTrigger
                  className={cn(
                    "flex items-center gap-2 font-semibold",
                    navigationMenuTriggerStyle()
                  )}
                >
                  <Icon
                    size={24}
                    className="text-green-900 dark:text-green-500"
                  />
                  {label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {subLinks?.map(({ title, label, href, icon }) => {
                      return (
                        <ListItem
                          key={href}
                          title={title}
                          icon={icon}
                          href={href}
                        >
                          <span className="text-xs">{label}</span>
                        </ListItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={href}>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "flex items-center gap-2 font-semibold",
                    navigationMenuTriggerStyle()
                  )}
                >
                  <Icon
                    size={24}
                    className="text-green-900 dark:text-green-500"
                  />
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
