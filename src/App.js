import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

function App() {
  const [itens, setItens] = useState([
    {
      title: "Javascript",
      description:
        "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    },
    {
      title: "Golang",
      description:
        "Go é uma linguagem de programação criada pela Google e lançada em código livre em novembro de 2009. É uma linguagem compilada e focada em produtividade e programação concorrente, baseada em trabalhos feitos no sistema operacional chamado Inferno.",
    },
    {
      title: "Java",
      description:
        "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems. Em 2008 o Java foi adquirido pela empresa Oracle Corporation.",
    },
    {
      title: "PHP",
      description:
        "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.",
    },
    {
      title: "C#",
      description:
        "C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.",
    },
    {
      title: "C++",
      description:
        "C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. Desde os anos 1990 é uma das linguagens comerciais mais populares, sendo bastante usada também na academia por seu grande desempenho e base de utilizadores.",
    },
    {
      title: "C",
      description:
        "C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela Organização Internacional para Padronização, criada em 1972 por Dennis Ritchie na empresa AT&T Bell Labs para desenvolvimento do sistema operacional Unix.",
    },
    {
      title: "Cobol",
      description:
        "COBOL - Linguagem Comum Orientada para os Negócios é uma linguagem de programação orientada para o processamento de banco de dados comerciais. É a linguagem de programação inteira mais usada, produto do Departamento de Defesa norte-americano sob a direção da contra-almirante Grace Murray Hopper.",
    },
    {
      title: "Haskell",
      description:
        "Haskell é uma linguagem de programação puramente funcional, de propósito geral, nomeada em homenagem ao lógico Haskell Curry. Como uma linguagem funcional, a estrutura de controle primária é a função; a linguagem é baseada nas observações de Haskell Curry e seus descendentes intelectuais.",
    },
    {
      title: "Elixir",
      description:
        "Elixir é uma linguagem de programação funcional, concorrente, de propósito geral que executa na máquina virtual Erlang.",
    },
    {
      title: "Python",
      description:
        "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.",
    },
  ]);
  const [itensPerPage, setItensPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);

  return (
    <div className="App">
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />

      <div>
        {currentItens.map((item, i) => {
          return (
            <Card key={i} title={item.title} description={item.description} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
