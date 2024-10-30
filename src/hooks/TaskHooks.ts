import { useState } from 'react';

export function TaskHooks() {
    const [inputValue, setInputValue] = useState<string>('');
    const [tasks, setTasks] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            handleAddTask();
        }
    };

    const handleRemoveTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return {
        inputValue,
        tasks,
        handleInputChange,
        handleAddTask,
        handleKeyDown,
        handleRemoveTask,
    };
}