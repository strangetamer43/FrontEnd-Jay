import React from 'react'
import { useParams } from 'react-router-dom';
import CollectResponseVideo from './CollectResponseVideo';
import { getQuizById } from '../../APIServices/QuestionAPI';
import CollectResponseAudio from './CollectResponseAudio';
import CollectResponse from './CollectResponse';
const Check = () => {
    const [quizDetails, setQuizDetails] = React.useState();
    const params = useParams();
    React.useEffect(() => {
        var quizId = params.quizId
        if (quizId !== undefined) {
            getQuizById(quizId)
                .then((data) => {
                    setQuizDetails(data.data)
                },
                    error => {
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();
                    }
                );
        }

    }, [params.quizId]);
    console.log(quizDetails)


    if (quizDetails?.recording === "video") {
        return (
            <>
                <CollectResponseVideo quizId={params.quizId} />
            </>
        )
    }
    else if (quizDetails?.recording === "audio") {
        return (

            <>
                <CollectResponseAudio quizId={params.quizId} />
            </>
        )
    }
    else if (quizDetails?.recording === "none") {
        return (
            <>
                <CollectResponse quizId={params.quizId} />
            </>
        )

    } else {
        return (<></>)
    }
}

export default Check