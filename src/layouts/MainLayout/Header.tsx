import {
  AnchorButton,
  Button,
  ButtonGroup,
  Divider,
  InputGroup,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import {
  FlashIcon,
  GitRepoIcon,
  MoonIcon,
  SearchIcon,
  WrenchIcon
} from "@blueprintjs/icons";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Header({
  openOmnibarSearch
}: {
  openOmnibarSearch: () => void;
}) {
  const showSearchInput = useMediaQuery("(min-width: 500px)");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <Navbar className="p-0! shadow-[0px_0px_0px_1px_#10161a33,0px_0px_0px_#10161a00,0px_1px_1px_#10161a33]!">
      <div className="mx-auto w-full max-w-350 px-5 sm:px-10">
        <NavbarGroup>
          <NavbarHeading>
            <Link
              href="/"
              className="flex cursor-pointer items-center transition-opacity hover:no-underline hover:opacity-30"
            >
              <WrenchIcon size={18} />
              <span className="ml-1.25 text-lg font-semibold">
                Digi-Toolbox
              </span>
            </Link>
          </NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align="right">
          {showSearchInput && (
            <>
              <InputGroup
                readOnly
                type="search"
                placeholder="Search tools..."
                leftElement={<SearchIcon className="m-2" />}
                onClick={openOmnibarSearch}
              />
              <Divider />
            </>
          )}
          <ButtonGroup>
            {!showSearchInput && (
              <Button
                variant="minimal"
                title="Search tools"
                icon={<SearchIcon />}
                onClick={openOmnibarSearch}
              />
            )}
            <Button
              variant="minimal"
              title="Toggle dark mode"
              icon={isDark ? <FlashIcon /> : <MoonIcon />}
              onClick={toggleTheme}
            />
            <AnchorButton
              variant="minimal"
              title="Github repository"
              icon={<GitRepoIcon />}
              href="https://github.com/kaushalmeena/digi-toolbox"
            />
          </ButtonGroup>
        </NavbarGroup>
      </div>
    </Navbar>
  );
}
