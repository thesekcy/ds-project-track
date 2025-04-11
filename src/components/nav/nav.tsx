import { ConfigIcon, EnhancedSearchIcon, NotificationIcon, SunIcon } from "../icons";
import { Logo } from "../logo";
import { useState, useRef, useEffect } from "react";

export const Nav = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Effect to handle clicks outside the search component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node) &&
        searchValue === ""
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const menuData = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Menu 1",
      href: "/",
    },
    {
      label: "Menu 2",
      href: "/",
    },
    {
      label: "Menu 3",
      href: "/",
    },
    {
      label: "Menu 4",
      href: "/",
    },
  ];

  return (
    <div className="flex items-center justify-between">
      <nav className="flex items-center gap-16">
        <Logo />
        <ul className="flex gap-8">
          {menuData.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-lg">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="actions flex items-center gap-2">
        <div
          className={`relative transition-all duration-300 ease-in-out ${
            isExpanded ? "w-[430px]" : "w-24"
          } overflow-hidden`}
          onMouseEnter={() => setIsExpanded(true)}
          ref={searchInputRef}
        >
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            className={`peer py-4 px-6 pe-11 block w-full bg-gray-100 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 focus:border-transparent ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
            placeholder="Deixe-nos te ajudar a encontrar o que procura..."
          />
          <div
            className={`absolute px-4 inset-y-0 end-0 flex items-center justify-center ${
              isExpanded ? "rounded-none pe-4" : "bg-gray-100 rounded-full"
            } ${
              isExpanded ? "pointer-events-none" : "cursor-pointer"
            } peer-disabled:opacity-50 peer-disabled:pointer-events-none transition-all duration-300 ease-in-out`}
            onClick={() => setIsExpanded(true)}
          >
            <EnhancedSearchIcon strokeWidth={1.5}/>
          </div>
        </div>

        <a className="bg-gray-100 rounded-full p-4">
          <NotificationIcon strokeWidth={1.5}/>
        </a>
        <a className="bg-dark rounded-full p-4">
          <SunIcon color="white" strokeWidth={1.5}/>
        </a>
        <a className="bg-gray-100 rounded-full p-4">
          <ConfigIcon strokeWidth={1.5}/>
        </a>
      
        <a>
          <div
            className="size-14 rounded-full"
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </a>
      </div>
    </div>
  );
};
