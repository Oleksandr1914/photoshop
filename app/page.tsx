import { Button } from "@/components/Button/Button";
import { Htag } from "@/components/Htag/Htag";
import Logo from '../public/vercel.svg';
import { Paragraph } from "@/components/Paragraph/Paragraph";



export default function Home(): JSX.Element {

  return (
    <main><Htag tag='h1'>Текст</Htag>
      <Logo />
      <Paragraph size="s">dsdfkjsdhfkkadskjhfgadsfjhgsadf dfsfd sdfsddd</Paragraph>
      <Paragraph >dsdfkjsdhfkkadskjhfgadsfjhgsadf dfsfd sdfsddd</Paragraph>
      <Paragraph size="l">dsdfkjsdhfkkadskjhfgadsfjhgsadf dfsfd sdfsddd</Paragraph>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
    </main>
  );
}
