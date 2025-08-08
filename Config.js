import { @SwitchProperty, @Vigilant, @SelectorProperty } from "Vigilance";

@Vigilant("SBDOverlay", "SBDOverlay Settings")

class Config {
    @SwitchProperty({
        name: "Party Finder Stats",
        description: "Displays additional stats of players in Party Finder.",
        category: "Party Finder",
        subcategory: "Overlay"
    })
    partyfinder = true;

    @SwitchProperty({
        name: "Show Class Level",
        description: "Displays the player's class level in Party Finder.",
        category: "Party Finder",
        subcategory: "Overlay"
    })
    partyfinderClassLevel = true;

    @SwitchProperty({
        name: "Show Catacombs Level",
        description: "Displays the player's Catacombs level in Party Finder.",
        category: "Party Finder",
        subcategory: "Overlay"
    })
    partyfinderCata = true;

    @SwitchProperty({
        name: "Show Total Secrets",
        description: "Displays the player's total secrets found in Party Finder.",
        category: "Party Finder",
        subcategory: "Overlay"
    })
    partyfinderSecrets = true;

    @SwitchProperty({
        name: "Show Secret Average",
        description: "Displays the player's average secrets per run in Party Finder.",
        category: "Party Finder",
        subcategory: "Overlay"
    })
    partyfinderSecretAverage = true;

    @SwitchProperty({
        name: "Show S+ Personal Best",
        description: "Displays the player's fastest S+ clear time for the current floor in Party Finder.",
        category: "Party Finder",
        subcategory: "Overlay"
    })
    partyfinderF7PB = true;

    @SwitchProperty({
        name: "Show Missing Classes",
        description: "Displays which classes are missing in Party Finder.",
        category: "Party Finder",
        subcategory: "Overlay"
    })
    missingclasses = false;

    @SelectorProperty({
        name: "Missing Classes Floor Filter",
        description: "Specifies for which floors to display missing classes.",
        category: "Party Finder",
        subcategory: "Overlay",
        options: ["Show for every floor", "Only M4, M6, M7"]
    })
    missingclassesfloor = 0;

    constructor() {
        this.initialize(this);

        this.addDependency("Show Class Level", "Party Finder Stats");
        this.addDependency("Show Total Secrets", "Party Finder Stats");
        this.addDependency("Show Catacombs Level", "Party Finder Stats");
        this.addDependency("Show Secret Average", "Party Finder Stats");
        this.addDependency("Show S+ Personal Best", "Party Finder Stats");
        this.addDependency("Missing Classes Floor Filter", "Show Missing Classes");
    }
}

export default new Config();
