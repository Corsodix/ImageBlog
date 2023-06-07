export function srcToFile(src: string, fileName: string, mimeType: string) {
    return fetch(src)
        .then(function (res) {
            return res.arrayBuffer();
        })
        .then(function (buf) {
            return new File([buf], fileName, { type: mimeType });
        });
}

export const imageFileToString = (file: File): Promise<string> => {
    const temporaryFileReader = new FileReader();
    return new Promise((resolve, reject) => {
        temporaryFileReader.onerror = () => {
            temporaryFileReader.abort();
            reject(new DOMException("Problem parsing input file."));
        };
        temporaryFileReader.onload = () => {
            if (typeof temporaryFileReader.result === 'string') {
                resolve(temporaryFileReader.result);
            }
            reject(new DOMException("Result is not a string"))
        };
        temporaryFileReader.readAsDataURL(file);
    });
}

export const imageFileToBinaryString = (file: File): Promise<string> => {
    const temporaryFileReader = new FileReader();
    return new Promise((resolve, reject) => {
        temporaryFileReader.onerror = () => {
            temporaryFileReader.abort();
            reject(new DOMException("Problem parsing input file."));
        };
        temporaryFileReader.onload = () => {
            if (typeof temporaryFileReader.result === 'string') {
                resolve(temporaryFileReader.result);
            }
            reject(new DOMException("Result is not a string"))
        };
        temporaryFileReader.readAsBinaryString(file);
    });
}


export const resizeImage = (src: string, width: number): Promise<string> => {
    const temporaryImage = new Image()
    temporaryImage.src = src
    return new Promise((resolve, reject) => {
        temporaryImage.onerror = () => {
            reject(new DOMException("Problem parsing input file."));
        };
        temporaryImage.onload = () => {
            if (temporaryImage.height !== null || temporaryImage.width !== null) {
                const canvas: HTMLCanvasElement = document.createElement('canvas')
                canvas.width = width
                canvas.height = temporaryImage.height * width / temporaryImage.width
                const canvasContext = canvas.getContext('2d')
                if (canvasContext) {
                    canvasContext.drawImage(temporaryImage, 0, 0, canvas.width,canvas.height)
                    resolve(canvasContext.canvas.toDataURL('image/jpeg', 90))
                }
                reject(new DOMException("Canvas Context is null"))
            }
            reject(new DOMException("Temporary Image doesn't have dimensions"))
        };
    })
}