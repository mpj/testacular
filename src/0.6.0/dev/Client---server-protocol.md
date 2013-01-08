# Client - Server protocol

These are the SocketIO events that are transmitted between the browser and the testacular server.

## Server -> Client protocol

#### execute([config])
* Parameters:	config (Object) – Optional configuration object, will be passed to start()

#### info()
* Returns:	Information about all captured browsers
* Return type:	Array

## Client -> Server protocol

#### info()
* Returns:	Object with information (i.e. browser name)
* Return type:	Object

#### result()
* Returns:	Result object
* Return type:	Object

#### error()

#### complete()