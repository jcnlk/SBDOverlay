import { @SelectorProperty, @SwitchProperty, @TextProperty, @Vigilant } from 'Vigilance';

@Vigilant('SBDOverlay', 'SBDOverlay Settings')
class Config {
    @SwitchProperty({
        name: 'Party Finder Stats',
        description: 'Shows stats of players in Party Finder.',
        category: 'Party Finder',
        subcategory: 'Overlay',
    })
    partyfinder = true;

    @SwitchProperty({
        name: 'Show class level',
        description: 'Shows the player\'s class level in party finder.',
        category: 'Party Finder',
        subcategory: 'Overlay',
    })
    partyfinderClassLevel = true;

    @SwitchProperty({
        name: 'Show cata level',
        description: 'Shows the player\'s catacombs level in party finder.',
        category: 'Party Finder',
        subcategory: 'Overlay',
    })
    partyfinderCata = true;

    @SwitchProperty({
        name: 'Show total secrets',
        description: 'Shows the player\'s total amount of secrets in party finder.',
        category: 'Party Finder',
        subcategory: 'Overlay',
    })
    partyfinderSecrets = true;

    @SwitchProperty({
        name: 'Show secret average',
        description: 'Shows the player\'s secret average in party finder.',
        category: 'Party Finder',
        subcategory: 'Overlay',
    })
    partyfinderSecretAverage = true;

    @SwitchProperty({
        name: 'Show S+ PB',
        description: 'Shows the player\'s fastest S+ time for the current floor in party finder.',
        category: 'Party Finder',
        subcategory: 'Overlay',
    })
    partyfinderF7PB = true;

    @SwitchProperty({
        name: 'Show missing classes',
        description: 'Displays missing classes in M4/M6/M7 party finder.',
        category: 'Party Finder',
        subcategory: 'Overlay',
    })
    missingclasses = false;

    constructor() {
        this.initialize(this);

        this.addDependency("Show class level", "Party Finder Stats")
        this.addDependency("Show total secrets", "Party Finder Stats")
        this.addDependency("Show cata level", "Party Finder Stats")
        this.addDependency("Show secret average", "Party Finder Stats")
        this.addDependency("Show S+ PB", "Party Finder Stats")
    }
}

export default new Config();
