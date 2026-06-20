import { Button } from "@/components/atoms/Button";
import { SkillFilterProps } from "@/types/componentsCustomProps";
import { Wrap } from "@chakra-ui/react";

export const SkillFilter = ({
  skills,
  selectedSkills,
  onSelectSkills,
}: SkillFilterProps) => (
  <Wrap gap={3} flexWrap="wrap" my={8}>
    {skills.map((skill) => {
      const { name, iconColor, iconName, slug, category } = skill.fields;
      const isAll = name === "All";
      const isActive = selectedSkills.includes(name);

      const getUpdatedSelectedSkills = () => {
        if (isAll) return ["All"];

        if (isActive) {
          return selectedSkills.filter(
            (selectedSkill) =>
              selectedSkill !== name && selectedSkill !== "All",
          );
        }

        const skillsListWithoutAll = selectedSkills.filter(
          (selectedSkill) => selectedSkill !== "All",
        );

        return [name, ...skillsListWithoutAll];
      };

      const onBadgeClicked = () => {
        const updatedSelectedFilter = getUpdatedSelectedSkills();

        if (updatedSelectedFilter.length === 0) {
          onSelectSkills(["All"]);
          return;
        }

        onSelectSkills(updatedSelectedFilter);
      };

      return (
        <Button
          key={skill.sys.id}
          size="sm"
          colorPalette="brand"
          variant={isActive ? "solid" : "outline"}
          onClick={onBadgeClicked}
        >
          {name}
        </Button>
      );
    })}
  </Wrap>
);
