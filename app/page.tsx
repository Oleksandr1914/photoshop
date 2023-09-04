"use client";
import { Button } from "@/components/Button/Button";
import { Htag } from "@/components/Htag/Htag";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Tag } from "@/components/Tag/Tag";
import { Rating } from "@/components/Rating/Rating";
import { useState } from "react";



export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <><Htag tag='h1'>Текст</Htag>

      <Paragraph size="s">dsdfkjsdhfkkadskjhfgadsfjhgsadf dfsfd sdfsddd</Paragraph>
      <Paragraph >dsdfkjsdhfkkadskjhfgadsfjhgsadf dfsfd sdfsddd</Paragraph>
      <Paragraph size="l">dsdfkjsdhfkkadskjhfgadsfjhgsadf dfsfd sdfsddd</Paragraph>
      <Tag size='s' color="red">Маленький</Tag>
      <Tag color="ghost">Маленький</Tag>
      <Tag size='m' color="grey">sddsd</Tag>
      <Tag size='s' color="green">asd</Tag>
      <Tag size='s' color="primary">asd</Tag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </ >
  );
}
