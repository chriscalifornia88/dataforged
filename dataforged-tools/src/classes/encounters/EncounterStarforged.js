import { EncounterDisplay, EncounterVariant, Source } from "@classes/index.js";
import { Gamespace } from "@json_out/common/Gamespace.js";
/**
 * Represents an *Ironsworn: Starforged* Encounter entry.
 * @internal
 */
export class EncounterStarforged {
    constructor(json, ...ancestorSourceJson) {
        var _a;
        const gamespace = Gamespace.Starforged;
        this.$id = `${gamespace}/Encounters/${json.Name.replaceAll(" ", "_")}`;
        this.Name = json.Name;
        this.Nature = json.Nature;
        this.Summary = json.Summary;
        this.Tags = json.Tags;
        this.Rank = json.Rank;
        this.Display = new EncounterDisplay((_a = json.Display) !== null && _a !== void 0 ? _a : {}, this.Name);
        this.Features = json.Features;
        this.Drives = json.Drives;
        this.Tactics = json.Tactics;
        const newSource = new Source(json.Source, ...ancestorSourceJson);
        this.Description = json.Description;
        this["Quest Starter"] = json["Quest Starter"];
        this.Source = newSource;
        this.Variants = json.Variants.map(variant => new EncounterVariant(variant, this));
    }
}