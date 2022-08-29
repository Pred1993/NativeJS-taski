import React from 'react'
import './lesson_4';

type handlePromiseType = {
    promise: null | Promise<any>
    resolve:  null | Function
    reject:  null | Function
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}
const Lesson4 = () => {
    const handlePromise: handlePromiseType = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess: (paramName: string) => {
            console.log(`Promise is resolved with data: ${paramName}`)
        },
        onError: (paramName: string) => {
            console.log(`Promise is rejected with error: ${paramName}`)
        }
    }
    const CreatePromise = () => {
        handlePromise.promise = new Promise((resolve, reject) => {
            handlePromise.resolve = resolve
            handlePromise.reject = reject
        })

    }

    const ResolvePromise = () => {
        handlePromise.resolve && handlePromise.resolve('Hello')
        handlePromise.promise && handlePromise.promise.then(handlePromise.onSuccess)
       }

    const RejectPromise = () => {
        handlePromise.reject && handlePromise.reject('Error')
        handlePromise.promise && handlePromise.promise.catch(handlePromise.onError)
    }

    return (
        <div>
            <button id='btn-create-promise' onClick={CreatePromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={ResolvePromise}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={RejectPromise}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;