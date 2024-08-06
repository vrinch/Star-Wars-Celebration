const { expect } = require('chai');
const { run } = require('./main');

describe("Solution", function () {
    it("should return correct output for A New Hope and Raymus Antilles", async function () {
        const result = await run("A New Hope", "Raymus Antilles");
        expect(result).to.equal("A New Hope: Beru Whitesun lars, Biggs Darklighter, C-3PO, Chewbacca, Darth Vader, Greedo, Han Solo, Jabba Desilijic Tiure, Jek Tono Porkins, Leia Organa, Luke Skywalker, Obi-Wan Kenobi, Owen Lars, R2-D2, R5-D4, Raymus Antilles, Wedge Antilles, Wilhuff Tarkin; Raymus Antilles: A New Hope, Revenge of the Sith");
    });

    it("should return correct output for The Force Awakens and Poggle the Lesser", async function () {
        const result = await run("The Force Awakens", "Poggle the Lesser");
        expect(result).to.equal("The Force Awakens: Ackbar, BB8, Captain Phasma, Chewbacca, Finn, Han Solo, Leia Organa, Luke Skywalker, Poe Dameron, R2-D2, Rey; Poggle the Lesser: Attack of the Clones, Revenge of the Sith");
    });

    it("should return correct output for The Force Awakens and Walter White", async function () {
        const result = await run("The Force Awakens", "Walter White");
        expect(result).to.equal("The Force Awakens: Ackbar, BB8, Captain Phasma, Chewbacca, Finn, Han Solo, Leia Organa, Luke Skywalker, Poe Dameron, R2-D2, Rey; Walter White: none");
    });
});
