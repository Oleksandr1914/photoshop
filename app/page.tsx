import { Button } from "@/components/Button/Button";
import { Htag } from "@/components/Htag/Htag";
import Logo from '../public/vercel.svg';


export default function Home(): JSX.Element {

  return (
    <main><Htag tag='h1'>Текст</Htag>
      <Logo />
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
    </main>
  );
}
