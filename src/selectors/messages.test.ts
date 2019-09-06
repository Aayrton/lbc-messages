import React from "react";
import { formattedMessagesSelector } from "../selectors/messages";
const state = {
  messages: [
    {
      text: "Hello! je souhaiterais vendre mon armoire Ikea",
      date: 1567637626,
      private: false
    },
    {
      text: "Vends TV 4K UHD",
      date: 1567641226,
      private: false
    },
    {
      text: "Vends une",
      date: 1567644826,
      private: true
    }
  ],
  error: "",
  loading: false
};

describe("messages Selectors", () => {
  describe("formattedMessagesSelector", () => {
    it("should return an array of sorted formatted messages", () => {
      const expected = [
        {
          text: "Vends TV 4K UHD",
          date: "jeudi 5 septembre 2019 01:53",
          private: false
        },
        {
          text: "Hello! je souhaiterais vendre mon armoire Ikea",
          date: "jeudi 5 septembre 2019 00:53",
          private: false
        }
      ];

      expect(formattedMessagesSelector(state)).toEqual(expected);
    });
  });
});
