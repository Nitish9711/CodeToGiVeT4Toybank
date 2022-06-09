import React, { useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@mui/material";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";


function getSteps() {
    return [
        "Email Verification",
        "OTP Verification",
        "Personal Information",
    ];
}
const BasicForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="email"
                render={({ field }) => (
                    <TextField
                        id="email"
                        label="Enter Email"
                        variant="outlined"
                        placeholder="Enter Your Email"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};
const OTPForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="OTP"
                render={({ field }) => (
                    <TextField
                        id="OTP"
                        label="Enter OTP"
                        variant="outlined"
                        placeholder="Enter The OTP"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};
const PersonalForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="address1"
                render={({ field }) => (
                    <TextField
                        id="address1"
                        label="Address 1"
                        variant="outlined"
                        placeholder="Enter Your Address 1"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="address2"
                render={({ field }) => (
                    <TextField
                        id="address2"
                        label="Address 2"
                        variant="outlined"
                        placeholder="Enter Your Address 2"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="country"
                render={({ field }) => (
                    <TextField
                        id="country"
                        label="Country"
                        variant="outlined"
                        placeholder="Enter Your Country Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BasicForm />;
        case 1:
            return <OTPForm />;
        case 2:
            return <PersonalForm />;
        default:
            return "unknown step";
    }
}

const LinaerStepper = () => {
    const methods = useForm({
        defaultValues: {
            email: "",
            OTP: "",
            address1: "",
            address2: "",
            country: "",
        },
    });
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const handleNext = (data) => {
        console.log(data);
        if (activeStep === steps.length - 1) {
            fetch("https://jsonplaceholder.typicode.com/comments")
                .then((data) => data.json())
                .then((res) => {
                    console.log(res);
                    setActiveStep(activeStep + 1);
                });
        } else {
            setActiveStep(activeStep + 1);
            setSkippedSteps(
                skippedSteps.filter((skipItem) => skipItem !== activeStep)
            );
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    // const onSubmit = (data) => {
    //   console.log(data);
    // };
    return (
        <div style={{width: "650px"}}>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center">
                    Thank You
                </Typography>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep)}

                            <Button
                                style={{ marginRight: 8 }}
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                back
                            </Button>
                            <Button
                                style={{ marginRight: 8 }}
                                variant="contained"
                                color="primary"
                                // onClick={handleNext}
                                type="submit"
                            >
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </form>
                    </FormProvider>
                </>
            )}
        </div>
    );
};

export default LinaerStepper;