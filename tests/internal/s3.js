import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js'
import { AWSConfig, S3Client, S3ServiceError } from '../../build/s3.js'

export async function s3TestSuite(data) {
    const s3Client = new S3Client(data.awsConfig)
    s3Client.host = `s3.${data.awsConfig.endpoint}`
    s3Client.scheme = `https`

    // describe('[s3]', async () => {
    async function testListBuckets() {
        // Act
        const buckets = await s3Client.listBuckets()

        // Assert
        expect(buckets, 's3.listBuckets result').to.be.an('array')
        expect(buckets, 's3.listBuckets result').to.have.lengthOf(1)
        expect(buckets[0].name, 's3.listBuckets result first entry').to.equal(
            data.s3.testBucketName
        )
    }

    await testListBuckets()

    // describe('[S3] list objects', async () => {
    //     let error = null
    //     let objects

    //     try {
    //         // Act
    //         objects = await s3Client.listObjects(data.s3.testBucketName)
    //     } catch (err) {
    //         error = err
    //     }

    //     // Assert
    //     expect(error, `Error thrown: ${error ? error.message : 'none'}`).to.be.null
    //     expect(objects).to.be.an('array')
    //     expect(objects).to.have.lengthOf(3)
    //     expect(objects[0].key).to.equal('bonjour.txt')
    //     expect(objects[1].key).to.equal('delete.txt')
    //     expect(objects[2].key).to.equal('tschuss.txt')
    // })

    // describe('[S3] getObject should throw an error when getting an object from a non-existing bucket', async () => {
    //     let error
    //     try {
    //         await s3Client.getObject('non-existent-bucket', data.s3.testObjects[0].key)
    //     } catch (err) {
    //         error = err
    //     }

    //     expect(error).to.be.instanceOf(S3ServiceError)
    // })

    // describe('[s3.getObject] should throw an error when getting a non-existing object', async () => {
    //     let error
    //     try {
    //         await s3Client.getObject(data.s3.testBucketName, 'non-existent-object.txt')
    //     } catch (err) {
    //         error = err
    //     }

    //     expect(error).to.be.instanceOf(S3ServiceError)
    // })

    // describe('[s3.getObject] should successfully get an existing object', async () => {
    //     let error
    //     let result
    //     try {
    //         result = await s3Client.getObject(data.s3.testBucketName, data.s3.testObjects[0].key)
    //     } catch (err) {
    //         error = err
    //     }

    //     expect(error, `Error thrown: ${error ? error.message : 'none'}`).to.be.null
    //     expect(result).to.be.an('object')
    //     expect(result.key).to.equal(data.s3.testObjects[0].key)
    //     expect(result.body).to.equal(data.s3.testObjects[0].data)
    // })

    // //     // Arrange
    // //     const getObjectFromNonExistingBucketFn = () =>
    // //         s3Client.getObject('non-existent-bucket', data.s3.testObjects[0].key)
    // //     const getNonExistingObjectFn = () =>
    // //         s3Client.getObject(data.s3.testBucketName, 'non-existent-object.txt')

    // //     // Act
    // //     const gotFirstObject = s3Client.getObject(
    // //         data.s3.testBucketName,
    // //         data.s3.testObjects[0].key
    // //     )
    // //     const gotSecondObject = s3Client.getObject(
    // //         data.s3.testBucketName,
    // //         data.s3.testObjects[1].key
    // //     )

    // //     // Assert
    // //     expect(gotFirstObject).to.be.an('object')
    // //     expect(gotFirstObject.key).to.equal(data.s3.testObjects[0].key)
    // //     expect(gotFirstObject.body).to.equal(data.s3.testObjects[0].data)
    // //     expect(gotSecondObject).to.be.an('object')
    // //     expect(gotSecondObject.key).to.equal(data.s3.testObjects[1].key)
    // //     expect(gotSecondObject.body).to.equal(data.s3.testObjects[1].data)
    // //     expect(getNonExistingObjectFn).to.throw(S3ServiceError)
    // //     expect(getObjectFromNonExistingBucketFn).to.throw(S3ServiceError)
    // // })

    // describe('[S3] put object', () => {
    //     // Arrange
    //     const putNonExistingObjectFn = () =>
    //         s3Client.putObject(
    //             data.s3.testBucketName,
    //             'created-by-test.txt',
    //             'This file was created by a test'
    //         )

    //     // Assert
    //     expect(putNonExistingObjectFn).to.not.throw()
    // })

    // describe('[S3] deleteObject', () => {
    //     // Arrange
    //     const deleteExistingObjectFn = () =>
    //         s3Client.deleteObject(data.s3.testBucketName, data.s3.testObjects[2].key)
    //     const deleteFromNonExistingBucketFn = () => {
    //         s3Client.deleteObject('non-existent-bucket', data.s3.testObjects[2].key)
    //     }
    //     const deleteNonExistingObjectFn = () =>
    //         s3Client.deleteObject(data.s3.testBucketName, 'non-existent-object.txt')

    //     // Assert
    //     expect(deleteExistingObjectFn).to.not.throw()
    //     expect(deleteNonExistingObjectFn).to.not.throw()
    //     expect(deleteFromNonExistingBucketFn).to.throw(S3ServiceError)
    // })

    // describe('[S3] create multipart upload', () => {
    //     // Arrange
    //     const createMultipartUploadFn = () =>
    //         s3Client.createMultipartUpload(data.s3.testBucketName, 'created-by-test.txt')

    //     // Assert
    //     expect(createMultipartUploadFn).to.not.throw()
    // })

    // describe('[S3] upload part', () => {
    //     // Arrange
    //     const multipartUpload = s3Client.createMultipartUpload(
    //         data.s3.testBucketName,
    //         'created-by-test.txt'
    //     )
    //     const uploadPartFn = () =>
    //         s3Client.uploadPart(
    //             data.s3.testBucketName,
    //             multipartUpload.key,
    //             multipartUpload.uploadId,
    //             1,
    //             'This file was created by a test'
    //         )
    //     const uploadPartNonExistingMultipartUploadIdFn = () =>
    //         s3Client.uploadPart(
    //             data.s3.testBucketName,
    //             multipartUpload.key,
    //             'non-existent-upload-id',
    //             1,
    //             'This file was created by a test'
    //         )

    //     // Assert
    //     expect(uploadPartFn).to.not.throw()
    //     expect(uploadPartNonExistingMultipartUploadIdFn).to.throw(S3ServiceError)
    // })

    // describe('[S3] complete multipart upload', () => {
    //     // Arrange
    //     const multipartUpload = s3Client.createMultipartUpload(
    //         data.s3.testBucketName,
    //         'created-by-test.txt'
    //     )
    //     const uploadPart = s3Client.uploadPart(
    //         data.s3.testBucketName,
    //         multipartUpload.key,
    //         multipartUpload.uploadId,
    //         1,
    //         'This file was created by a test'
    //     )
    //     const completeMultipartUploadFn = () =>
    //         s3Client.completeMultipartUpload(
    //             data.s3.testBucketName,
    //             multipartUpload.key,
    //             multipartUpload.uploadId,
    //             [uploadPart]
    //         )
    //     const completeMultipartUploadNonExistingMultipartUploadIdFn = () =>
    //         s3Client.completeMultipartUpload(
    //             data.s3.testBucketName,
    //             multipartUpload.key,
    //             'non-existent-upload-id',
    //             [uploadPart]
    //         )
    //     const completeMultipartUploadNonExistingPartFn = () =>
    //         s3Client.completeMultipartUpload(
    //             data.s3.testBucketName,
    //             multipartUpload.key,
    //             multipartUpload.uploadId,
    //             [{ partNumber: 2, etag: 'non-existent-etag' }]
    //         )

    //     // Assert
    //     expect(completeMultipartUploadFn).to.not.throw()
    //     expect(completeMultipartUploadNonExistingMultipartUploadIdFn).to.throw(S3ServiceError)
    //     expect(completeMultipartUploadNonExistingPartFn).to.throw(S3ServiceError)
    // })

    // describe('[S3] abort multipart upload', () => {
    //     // Arrange
    //     const multipartUpload = s3Client.createMultipartUpload(
    //         data.s3.testBucketName,
    //         'created-by-test.txt'
    //     )
    //     const abortMultipartUploadFn = () =>
    //         s3Client.abortMultipartUpload(
    //             data.s3.testBucketName,
    //             multipartUpload.key,
    //             multipartUpload.uploadId
    //         )
    //     const abortMultipartUploadNonExistingMultipartUploadIdFn = () =>
    //         s3Client.abortMultipartUpload(
    //             data.s3.testBucketName,
    //             multipartUpload.key,
    //             'non-existent-upload-id'
    //         )

    //     // Assert
    //     expect(abortMultipartUploadFn).to.not.throw()
    //     expect(abortMultipartUploadNonExistingMultipartUploadIdFn).to.throw(S3ServiceError)
    // })

    // Teardown
    // Ensure to cleanup the file create by the s3 tests.
    s3Client.deleteObject(data.s3.testBucketName, 'created-by-test.txt')

    // Ensure the object used to test deletion is recreated
    s3Client.putObject(
        data.s3.testBucketName,
        data.s3.testObjects[2].key,
        data.s3.testObjects[2].body
    )
}
