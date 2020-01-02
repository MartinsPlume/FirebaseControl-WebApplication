import React from 'react'
import NewExercise from './ExerciseSwitchComponents/NewExercise';
import EditExercise from './ExerciseSwitchComponents/EditExercise';
import ViewExercise from './ExerciseSwitchComponents/ViewExercise'
import ImagePreview from './ImagePreview'

const ExerciseSwitch = ({componentType,exercise,SendEditSaveDeleteHappened}) => {

    const [image,setImage] = React.useState({})

    function HandleImagePreview(imagePreview){
        setImage(imagePreview)
    };

    let Output;

    switch ( componentType ) {

        case 'new':
            Output = (
                <>
                    <NewExercise 
                    SendHandlePreview={HandleImagePreview}
                    SendCloseExerciseSwitch={SendEditSaveDeleteHappened}
                    />
                    <ImagePreview image={image}/>
                </>
            )
            break;
        case 'view':
            Output = (
                <>
                    <ViewExercise 
                        viewExercise={exercise}
                        SendHandlePreview={HandleImagePreview}
                        SendCloseExerciseSwitch={SendEditSaveDeleteHappened}
                        />
                    <ImagePreview image={image}/>
                </>
            )
            break;
        case 'edit':
            Output = (
                <>
                    <EditExercise
                    editExercise={exercise}
                    SendHandlePreview={HandleImagePreview}
                    SendCloseExerciseSwitch={SendEditSaveDeleteHappened}
                    />
                    <ImagePreview image={image}/>
                </>
            )
            break;

        default:
            Output = null
            break;

  }
        
    return Output
}

export default ExerciseSwitch