import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export default function SelectSmall() {
    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        const selectedAge = event.target.value;
        setAge(selectedAge);
        switch (selectedAge) {
            case 'Mr':
                setGender('male');
                break;
            case 'Mrs':
                setGender('female');
                break;
            case 'Other':
                setGender('other');
                break;
            default:
                setGender('');
                break;
        }
    };

    return (
        <div className='flex items-center justify-center mt-5'>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value='Mr'>Mr.</MenuItem>
                    <MenuItem value='Mrs'>Mrs.</MenuItem>
                    <MenuItem value='Other'>Other</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                >
                    <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                    <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                    <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />
                </RadioGroup>
            </FormControl>
        </div>
    );
}
