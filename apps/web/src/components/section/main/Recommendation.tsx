import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { HERO_RECOMMENDATION } from "@/config/constants";

import "swiper/css";
import "swiper/css/pagination";
import Card, { CardBody, CardImage, CardSection } from "@/lib/Card";
import { Text, Title } from "@/lib";
import { StarIcon } from "@/lib/Icon";
import Button from "@/lib/Button";

export default function Recommendation() {
  const size: number = 8;

  return (
    <div className="relative h-full w-full">
      <Title
        className="w-3/12 my-5 lg:w-2/12"
        title="Our Beloved Recommendation"
      ></Title>

      <div className="grid grid-cols-2 gap-2 m-auto pb-8 justify-center lg:grid-cols-4 lg:gap-4">
        {HERO_RECOMMENDATION.slice(0, size).map((props) => (
          <Card key={props.id}>
            <CardImage
              src={props.img}
              alt={props.alt}
              className="w-full aspect-square rounded-lg"
            />
            <CardBody>
              <Title className="karma-font" title={props.name} />
              <CardSection className="flex items-center">
                <StarIcon height="16px" width="16px" className="h-full" />
                <Text>
                  {props.rating} · {props.reviewsCount} reviews ·{" "}
                  {props.cityLocation}, {props.countryLocation}
                </Text>
              </CardSection>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
