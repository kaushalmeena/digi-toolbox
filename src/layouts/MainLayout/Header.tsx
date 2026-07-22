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
import { Flash, GitRepo, Moon, Search, Wrench } from "@blueprintjs/icons";
import Link from "next/link";
import { useMediaQuery } from "@/hooks";

export default function Header({
  darkMode,
  toggleDarkMode,
  openOmnibarSearch
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
  openOmnibarSearch: () => void;
}) {
  const showSearchInput = useMediaQuery("(min-width: 500px)");

  return (
    <Navbar className="p-0! shadow-[0px_0px_0px_1px_#10161a33,0px_0px_0px_#10161a00,0px_1px_1px_#10161a33]!">
      <div className="mx-auto w-full max-w-350 px-5 sm:px-10">
        <NavbarGroup>
          <NavbarHeading>
            <Link
              href="/"
              className="flex cursor-pointer items-center transition-opacity hover:no-underline hover:opacity-30"
            >
              <Wrench size={18} />
              <span className="ml-1.25 text-lg font-semibold">GetThatTool</span>
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
                leftIcon={<Search />}
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
                icon={<Search />}
                onClick={openOmnibarSearch}
              />
            )}
            <Button
              variant="minimal"
              title="Toggle dark mode"
              icon={darkMode ? <Flash /> : <Moon />}
              onClick={toggleDarkMode}
            />
            <AnchorButton
              variant="minimal"
              title="Github repository"
              icon={<GitRepo />}
              href="https://github.com/kaushalmeena/myapp-getthattool"
            />
          </ButtonGroup>
        </NavbarGroup>
      </div>
    </Navbar>
  );
}
