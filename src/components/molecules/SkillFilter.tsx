import { SkillFilterProps } from "@/types/componentsCustomProps";
import { HStack } from "@chakra-ui/react";
import { Button } from "../atoms/Button";

export const SkillFilter = ({
  skills,
  selectedSkill,
  onSelectSkill,
}: SkillFilterProps) => (
  <HStack gap={3} flexWrap="wrap" mb={8}>
    {skills.map((skill) => {
      const isActive = selectedSkill === skill;

      return (
        <Button
          key={skill}
          size="sm"
          colorPalette="brand"
          variant={selectedSkill === skill ? "solid" : "outline"}
          onClick={() => onSelectSkill(skill)}
        >
          {skill}
        </Button>
      );
    })}
  </HStack>
);
