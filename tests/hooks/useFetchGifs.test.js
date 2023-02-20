import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el Hook de useFetchGifs', () => {
    test('Debe de regresar el estado inicial', () => {
        const {result} = renderHook( () => useFetchGifs('Formula 1'));
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe de devolver un array de imágenes y isLoading en false', async() => {
        const {result} = renderHook( () => useFetchGifs('Formula 1'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
})