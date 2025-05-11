import {
  InstagramIcon,
  LinkedinIcon,
  PhoneIncomingIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Main = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { text: "Home" },
    { text: "Team" },
    { text: "Services" },
    { text: "Faq's" },
    { text: "Stories" },
  ];

  // Card data for the three cards section
  const cardData = [
    { bgColor: "#dbebd7", title: "Card 1" },
    { bgColor: "#f0e595", title: "Card 2" },
    { bgColor: "#efd07d", title: "Card 3" },
  ];

  // Social media icons data
  const socialIcons = [
    { icon: <InstagramIcon className="w-6 h-6" /> },
    { icon: <LinkedinIcon className="w-6 h-6" /> },
    { icon: <TwitterIcon className="w-6 h-6" /> },
    { icon: <YoutubeIcon className="w-6 h-6" /> },
    { icon: <PhoneIncomingIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-[#dde7fe] flex flex-row justify-center w-full">
      <div className="bg-[#dde7fe] overflow-hidden w-[1440px] h-[3138px] relative">
        <div className="absolute w-[1453px] h-[783px] top-0 left-0">
          <div className="absolute w-[1440px] h-[783px] top-0 left-0 bg-white">
            <div className="relative h-[783px] bg-[url(/frame-19-1.png)] bg-cover bg-[50%_50%]">
              <header className="absolute w-full h-[120px] top-[9px] left-0 bg-transparent px-8">
                <div className="flex items-center justify-between">
                  <img
                    className="w-[156px] h-[120px]"
                    alt="Original"
                    src="/original.png"
                  />
                  <NavigationMenu>
                    <NavigationMenuList className="flex gap-12">
                      {navItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink className="text-xl font-normal hover:text-[#dfa900] transition-colors">
                            {item.text}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </header>

              <div className="absolute w-[781px] h-[435px] top-[198px] left-[33px]">
                <div className="absolute w-[781px] -top-px left-0 [font-family:'Poppins',Helvetica] font-semibold text-transparent text-[50px] tracking-[0] leading-normal">
                  <span className="text-black">
                    You don&apos;t have to control your thoughts. <br />
                    You just have to{" "}
                  </span>
                  <span className="text-[#dfa900]">
                    stop letting them control you.
                  </span>
                </div>

                <Button className="flex w-[417px] h-[89px] items-center justify-center gap-2.5 px-[53px] py-[29px] absolute top-[346px] left-0 rounded-[50px] [background:url(..//component-6.png)_50%_50%_/_cover]">
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-normal">
                    Click to book an appointment
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute w-[1453px] h-[150px] top-[633px] left-0 -rotate-180 [background:linear-gradient(180deg,rgba(221,231,254,1)_0%,rgba(255,255,255,0)_100%)]" />
        </div>

        <div className="absolute w-full top-[806px] text-center">
          <h2 className="text-5xl font-normal tracking-[2.50px] leading-normal">
            <span className="bg-gradient-to-r from-black to-[#dfa900] bg-clip-text text-transparent border-b-4 border-[#dfa900] pb-2">
              About Us
            </span>
          </h2>
        </div>

        <p className="absolute w-[1255px] top-[962px] left-[92px] [font-family:'Poppins',Helvetica] font-normal text-black text-[25px] text-center tracking-[0] leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat
          vehicula nulla, tincidunt placerat justo porta euismod. Ut non
          sagittis nisi. Praesent blandit ut neque quis accumsan. Duis consequat
          rhoncus fringilla. Praesent malesuada feugiat interdum. Aliquam
          lacinia varius imperdiet. Cras tincidunt blandit aliquam. Nullam non
          consequat tellus. Donec eget risus eleifend, consectetur dui ac,
          lacinia risus. Fusce in quam nisl. Nam metus erat, sodales et gravida
          ut, ullamcorper sit amet urna.&nbsp;&nbsp;Phasellus viverra a libero a
          viverra. Fusce molestie, quam vel sodales varius, nibh nulla suscipit
          diam,
        </p>

        <div className="absolute w-full top-[1287px] px-24">
          <div className="grid grid-cols-3 gap-8">
            {cardData.map((card, index) => (
              <Card
                key={index}
                className="bg-white rounded-[37.5px] p-6 flex flex-col items-center"
              >
                <div
                  className={`w-[60px] h-[60px] rounded-full mb-4`}
                  style={{ backgroundColor: card.bgColor }}
                />
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </Card>
            ))}
          </div>
        </div>

        <section className="absolute w-[1407px] h-[803px] top-[1720px] left-[33px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-normal tracking-[2.50px] leading-normal">
              <span className="bg-gradient-to-r from-black to-[#dfa900] bg-clip-text text-transparent border-b-4 border-[#dfa900] pb-2">
                Mission and Vision
              </span>
            </h2>
          </div>

          <p className="w-[704px] top-[180px] text-black absolute left-0 [font-family:'Poppins',Helvetica] font-normal text-[25px] tracking-[0] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            placerat vehicula nulla, tincidunt placerat justo porta euismod. Ut
            non sagittis nisi. Praesent blandit ut neque quis accumsan. Duis
            consequat rhoncus fringilla. Praesent malesuada feugiat interdum.
            Aliquam lacinia varius imperdiet. Cras tincidunt blandit aliquam.
            Nullam non consequat tellus. Donec eget risus eleifend, consectetur
            dui ac, lacinia risus. Fusce in quam nisl. Nam metus erat, sodales
            et gravida ut, ullamcorper sit amet urna.&nbsp;&nbsp;Phasellus
            viverra a libero a viverra. Fusce molestie, quam vel sodales varius,
            nibh nulla suscipit diam, aliquam lobortis enim urna ac odio. Nullam
            sollicitudin velit et tincidunt condimentum. Pellentesque quis
            sollicitudin lectus, at malesuada tellus. Mauris ut venenatis elit.
          </p>

          <img
            className="absolute w-[721px] h-[732px] top-[71px] left-[686px] object-cover"
            alt="Frame"
            src="/frame-5-1.png"
          />
        </section>

        <footer className="absolute w-full h-[540px] top-[2598px] left-0 bg-[#0f056f]">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-start">
              <div className="w-[283px] h-[207px] bg-[#fff2cc] rounded-[50px] flex items-center justify-center">
                <img
                  className="w-60 h-[185px]"
                  alt="Original"
                  src="/original-1.png"
                />
              </div>
              <div className="flex gap-6">
                {socialIcons.map((social, index) => (
                  <div
                    key={index}
                    className="w-[45px] h-[45px] bg-[#d9d9d9] rounded-full flex items-center justify-center"
                  >
                    {social.icon}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-px bg-white/50 my-8" />
            <p className="text-white/50 text-center text-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              placerat vehicula nulla.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};