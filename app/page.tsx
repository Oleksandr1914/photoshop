import { Button } from "@/components/Button/Button";
import { Htag } from "@/components/Htag/Htag";



export default function Home(): JSX.Element {

  return (
    <main><Htag tag='h1'>Текст</Htag>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost">Кнопка</Button>
    </main>
  );
}
