import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import image from '../../assets/Anniversary.png';
import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';


const courses = [
    { name: 'Certificate Program in Product Management', bonus: 'Rs. 8000' },
    { name: 'Executive Program in Data Driven Product Management', bonus: 'Rs. 9000' },
    { name: 'Executive Program in Product Management and Digital Transformation', bonus: 'Rs. 10,000' },
];

export default function Hero() {
    const [open, setOpen] = useState<boolean>(false);
    const [referrerName, setReferrerName] = useState<string>('');
    const [referrerEmail, setReferrerEmail] = useState<string>('');
    const [referrerPhoneNumber, setReferrerPhoneNumber] = useState<string>('');
    const [refereeName, setRefereeName] = useState<string>('');
    const [refereeEmail, setRefereeEmail] = useState<string>('');
    const [refereePhoneNumber, setRefereePhoneNumber] = useState<string>('');
    const [preferredCourse, setPreferredCourse] = useState<string>('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        if (referrerName.trim().length === 0) {
            alert('Please Enter your Name');
            return;
        }
        if (referrerEmail.trim().length === 0) {
            alert('Please Enter your E-Mail Id');
            return;
        }
        if (referrerPhoneNumber.trim().length === 0) {
            alert('Please Enter your Phone Number');
            return;
        }
        if (refereeName.trim().length === 0) {
            alert('Please Enter the Name of the Referee');
            return;
        }
        if (refereeEmail.trim().length === 0) {
            alert('Please Enter the Email of the Referee');
            return;
        }
        if (refereePhoneNumber.trim().length === 0) {
            alert('Please Enter the Phone Number of the Referee');
            return;
        }
        if (preferredCourse.trim().length === 0) {
            alert("Please Select Required Course");
            return;
        }
        if (refereeEmail === referrerEmail || refereePhoneNumber === referrerPhoneNumber) {
            alert('You cannot refer yourself');
            return;
        }
        if (refereePhoneNumber.length > 12 || referrerPhoneNumber.length > 12) {
            alert('Phone Numbers cannot exceed length 12');
            return;
        }

        try {
            const res = await axios.post('referral/create-referral', {
                refereeName,
                refereeEmail,
                refereePhoneNumber,
                referrerName,
                referrerEmail,
                referrerPhoneNumber,
                preferredCourse
            });

            if(res.status === 200){
                alert('Referral Successful');
                setReferrerEmail('');
                setReferrerPhoneNumber('');
                setRefereeEmail('');
                setRefereePhoneNumber('');
                setPreferredCourse('');
            }
            
        } catch (error) {
            alert('Error in Submitting Referral');
        }

        handleClose();
    };
    return (
        <Box
            id="hero"
            sx={() => ({
                width: '100%',
                backgroundImage: 'linear-gradient(180deg, #CEE5FD, #FFF)',
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        }}
                    >
                        Unlock Big Rewards&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: 'primary.main',
                            }}
                        >
                            by Referring Friends!
                        </Typography>
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="text.primary"
                        sx={{
                            alignSelf: 'center',
                            width: { sm: '100%', md: '80%' },
                            mt: 2,
                            fontSize: '1.25rem',
                            lineHeight: '1.5',
                        }}
                    >
                        <strong>Refer a friend</strong> and <strong> earn up to <span style={{ color: 'primary.main' }}>Rs. 15,000</span> </strong>! The more you refer, the <strong>more you win</strong>. Share the chance to explore our <span style={{ color: 'secondary.main' }}>courses</span> and start earning today!
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignSelf="center"
                        spacing={1}
                        useFlexGap
                        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                    >

                        <div>
                            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                                Refer a Friend
                            </Button>
                            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                                <DialogTitle>Refer a Friend</DialogTitle>
                                <DialogContent>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '100%' },
                                            backgroundColor: '#f0f4ff',
                                            padding: 2,
                                            borderRadius: 2,
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            required
                                            id="referrer-email"
                                            label="Your Name"
                                            variant="outlined"
                                            value={referrerName}
                                            onChange={(e) => setReferrerName(e.target.value)}

                                        />
                                        <TextField
                                            required
                                            id="referrer-email"
                                            label="Your Email"
                                            variant="outlined"
                                            value={referrerEmail}
                                            onChange={(e) => setReferrerEmail(e.target.value)}

                                        />
                                        <TextField
                                            required
                                            id="referrer-phone"
                                            label="Your Phone Number"
                                            variant="outlined"
                                            value={referrerPhoneNumber}
                                            onChange={(e) => setReferrerPhoneNumber(e.target.value)}
                                        />
                                        <TextField
                                            required
                                            id="referrer-email"
                                            label="Friend's Name"
                                            variant="outlined"
                                            value={refereeName}
                                            onChange={(e) => setRefereeName(e.target.value)}

                                        />
                                        <TextField
                                            required
                                            id="referred-email"
                                            label="Friend's Email"
                                            variant="outlined"
                                            value={refereeEmail}
                                            onChange={(e) => setRefereeEmail(e.target.value)}
                                        />
                                        <TextField
                                            required
                                            id="referred-phone"
                                            label="Friend's Phone Number"
                                            variant="outlined"
                                            value={refereePhoneNumber}
                                            onChange={(e) => setRefereePhoneNumber(e.target.value)}
                                        />
                                        <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
                                            <InputLabel id="preferred-course-label">Preferred Course</InputLabel>
                                            <Select
                                                labelId="preferred-course-label"
                                                id="preferred-course"
                                                value={preferredCourse}
                                                onChange={(e) => setPreferredCourse(e.target.value as string)}
                                                label="Preferred Course"
                                            >
                                                {courses.map((course, index) => (
                                                    <MenuItem key={index} value={course.name}>
                                                        {course.name} (Bonus: {course.bonus})
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="secondary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleSubmit} color="primary">
                                        Submit
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Stack>
                </Stack>


                <Box
                    id="image"
                    sx={() => ({
                        mt: { xs: 8, sm: 10 },
                        alignSelf: 'center',
                        height: { xs: 200, sm: 700 },
                        width: '100%',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor: alpha('#BFCCD9', 0.5),
                        boxShadow: `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`,
                    })}
                />
            </Container>
        </Box>
    );
}