import React from "react";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("Pruebas en <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debe de mostar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("100");
  });

  test("debe incrementar el contador con el boton +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("1");
  });

  test("debe decrementar el contador con el boton -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("-1");
  });

  test("debe colocar el contador con el valor por defecto con el boton reset", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("100");
  });
});
