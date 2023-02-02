import Title from "../Titulo/Title"

const Form = () => {

  return (
    <section>
        <Title titulo="Este es el titulo form" subTitulo="este es el subtitulo form"/>
        <form>
            <input type="text" placeholder="ingresa nombre"/>
        </form>
    </section>
  )
}

export default Form