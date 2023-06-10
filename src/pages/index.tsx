import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import { AppConfig } from "@/utils/AppConfig";
import Image from "next/image";
import Link from "next/link";

import "react-alice-carousel/lib/alice-carousel.css";


const Index = () => {

  return (
    <Main
      meta={
        <Meta
          canonical={AppConfig.baseUrl}
          title="Linq"
          description="Linq Description."
        />
      }
    >
      <div>
        {/* Hero */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl">
              Industry-leading NFC <br /> product assortment
            </h1>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <Image
                src={require("./../../public/static/images/faq.svg")}
                alt="support"
                width={24}
                height={24}
              />
              <div>
                <div>Frequently asked questions</div>
                <Link href="/" className="text-[#296fed]">
                  FAQ
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src={require("./../../public/static/images/headphone.svg")}
                alt="support"
                width={24}
                height={24}
              />
              <div>
                <div>Have questions about buying Linq product?</div>
                <Link href="/" className="text-[#296fed]">
                  Chat with a specialist
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}

        <div>
          
        </div>
      </div>
    </Main>
  );
};

export default Index;
