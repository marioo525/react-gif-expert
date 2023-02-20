import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  const newCategory = "Saitama";

  //Primero Debe agregar categorias nuevas:
  test("Debe de añadir nuevas categorias", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //ahora disparo los eventos para agregar 3 categorias nuevas
    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form); //agrega Saitama

    fireEvent.input(input, { target: { value: newCategory + "2" } });
    fireEvent.submit(form); //agrega Saitama2

    fireEvent.input(input, { target: { value: newCategory + "3" } });
    fireEvent.submit(form); //agrega Saitama3

    //Espero que se hallan agregado 3 categorías cuyos nombres aparecen en etiquetas h3
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(4); // Está bien solo que también está la categoria por defecto que es Formula 1
  });

  //No debe agregar una categoría si ya existe
  test("No debe de añadir nuevas categorias", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //disparo los eventos para agregar una categoría
    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form); //agrega Saitama

    //Intento agregar la misma categoria
    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form); //intento agregar Saitama nuevamente

    //espero que no agregue la misma categoría y sólo esté agregada la primera vez
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2); // Está bien solo que también está la categoria por defecto que es Formula 1
  });
});
