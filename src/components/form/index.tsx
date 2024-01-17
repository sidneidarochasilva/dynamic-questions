'use client';
import CardComponent from "@/components/card/Card";
import { TextAreaComponent } from "@/components/fields/textarea/TextArea";
import { useEffect, useState } from "react";
import { RatingComponent } from "../fields/rating/Rating";
import { RadioButtonComponent } from "../fields/radioButton/RadioButton";
import { SelectComponent } from "../fields/select/SelectComponent";
import { RadioComponent } from "../fields/radio/RadioButton";
import { MultipleButtonComponent } from "../fields/multipleButton/multipleButtonComponent";
import { CheckboxComponent } from "../checkbox/CheckBoxComponent";
import axios from "axios";




type Item = {
  typeQuestion: number;
  answerValue?: number;
  mandatory: boolean;
  content: string;
  itens?: { value: number; description: string }[];
  horizontal?: boolean;
};

type Data = {
  itens: Item[];
  error: string;
  warning: string;
};


export default function Form({ ...props }) {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);




  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json"
        );

        if (!response.ok) {
          setLoading(false);
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        const jsonData: Data = await response.json();

        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setData(null);
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  const enviarErro = async () => {
    setLoading(true);
    const response = await fetch(
      "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json"
    );
    const data = await response.json();
    setLoading(false);

    alert("Envio com erro!" + data);
    
  };

  const enviarSuccess = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json"
      );

      const data = await response.json();
      alert("Enviado com sucesso!" + data);
      setLoading(false);

    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
      setLoading(false);
    }
  };

  const enviarFakePost = async (event: React.FormEvent) => {
    
    setLoading(true);
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/"
      );

      if (response.status === 201) {
        alert("Parabens! Formulário enviado com sucesso!");
        setLoading(false);
      } else {

        alert("Erro ao enviar o formulário. Tente novamente.");
        setLoading(false);
      }
    } catch (error) {

      alert("Erro ao enviar o formulário. Tente novamente.");
      setLoading(false);
    }
  };




  return (
    < >
      {loading ? <h1>Loading...</h1> :

        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-28 top-[1000px] max-w-[600px]">
          <h1 className="text-white font-bold mb-4 text-4xl">{props.title}</h1>
          <CardComponent>

            <form className="border-spacing-4 flex gap-4 flex-col" >


              {data && data.itens.map((item, index) => {
                switch (index) {
                  case 0:
                    return (

                      <RatingComponent
                        title="Título da pergunta deve ficar aqui"
                        answerValue={item.answerValue}
                        description={item.content}
                      />
                    );

                  case 1:
                    return (

                      <RadioButtonComponent
                        title="Título da pergunta deve ficar aqui"
                        description={item.content}
                      />
                    );
                  case 2:
                    return (
                      <TextAreaComponent
                        key={index}
                        //{...register('name')}
                        description={item.content}
                        placeholder="Digite a resposta"
                      />
                    );
                  case 3:
                    return (


                      <SelectComponent
                        key={index}
                        options={item.itens}
                      />
                    );
                  case 4:
                    return (

                      <RadioComponent
                        name={item.content}
                        description={item.content}
                        key={index}
                        options={item.itens}
                      />
                    );
                  case 5:
                    return (
                      <MultipleButtonComponent
                        key={index}
                        marginTop="mt-10"
                        questionData={item}
                      />
                    );
                  case 6:
                    return (
                      <CheckboxComponent
                        name={item.content}
                        description={item.content}
                      />
                    );
                  case 7:
                    return (
                      <>
                        <TextAreaComponent
                          key={index}
                          description={item.content}
                          placeholder="Digite a resposta"
                        />
                        <TextAreaComponent
                          key={index + 1}
                          description={item.content}
                          placeholder="Digite a resposta"
                        />
                      </>

                    );


                  default:
                    return "";
                }
              })}




              <div className="flex justify-between gap-2 mt-7 flex-col md:flex-row md:text-center ">
                <button onClick={() => enviarSuccess()} className="bg-[#FFB800] rounded-full p-2 w-40"> Enviar </button>
                <button onClick={() => enviarErro()} className="bg-[#FFB800] rounded-full p-2 w-40"> Enviar Erro</button>
                <button onClick={(e: any) => enviarFakePost(e.target)} className="bg-[#FFB800] rounded-full p-2 w-40"> Enviar post fake</button>
              </div>



            </form>
          </CardComponent>
        </div>

      }


    </>
  )
}


