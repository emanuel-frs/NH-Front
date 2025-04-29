import React from 'react';
import { View } from 'react-native';
import QuestionModel from '../QuesionModel/QuestionModel';

interface Option {
  title: string;
  onPress: () => void;
}

interface QuestionGroupProps {
  options: Option[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}

const QuestionGroup: React.FC<QuestionGroupProps> = ({ options, selectedIndex, onSelect }) => {
  const handleSelect = (index: number, onPress: () => void) => {
    onSelect(index);
    onPress();
  };

  return (
    <View style={{width: '100%'}}>
      {options.map((option, index) => (
        <QuestionModel
          key={index}
          title={option.title}
          onPress={() => handleSelect(index, option.onPress)}
          isSelected={selectedIndex === index}
        />
      ))}
    </View>
  );
};

export default QuestionGroup;