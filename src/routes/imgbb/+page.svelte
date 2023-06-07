<script lang="ts">
	//import { API_KEY, UPLOAD_URL } from "$env/static/private";
    import { imageFileToBinaryString, imageFileToString } from "$lib/utils";
    import { FileButton } from "@skeletonlabs/skeleton";
  
    const API_KEY = "07d73a8043765c0fddeca34e573dc18a";

    const UPLOAD_URL = "https://api.imgbb.com/1/upload";
  
    /* interface FormData {
      name?: string;
      image: File | null;
      expiration?: null | number;
    } */
  
    /* function(blob: Blob) {
        fetch(`${api_url}${api_key}`, {
          method: 'POST',
          body: blob
        })
          .then(response => response.json())
          .then(result => alert(JSON.stringify(result, null, 2)))
      } */
  
  async function upload(
      apiKey: string,
      image: string,
      name: string
    ): Promise<IImage> {
      const formData = new FormData();
      formData.append("image", image);
      const resp = await (
        await fetch(`${UPLOAD_URL}?key=${API_KEY}`, {
          method: "POST",
          body: formData,
        })
      ).json();
      if (!resp.success)
        throw `api upload fail: ${resp.status_code}: ${resp.error.message}`;
    const uimg: IImage = {
        filename: resp.data.image.filename,
        url: resp.data.url,
        thumbUrl: resp.data.thumb.url,
        mediumUrl: resp.data.medium.url,
        height: resp.data.height,
        width: resp.data.width
    }
      return uimg;
    }
  
    const WIDTH = 200;
    let oldImageSrc: string;
    let newImageSrc: string;
    let files: FileList;
    let newImageFile: File;
    let showImage: boolean = false;
  
  interface IImage {
      filename: string,
      thumbUrl: string,
      mediumUrl: string,
      url: string,
      height: string,
      width: string
  }
  
      let newImage: IImage = {
          filename: '',
          thumbUrl: '',
          mediumUrl: '',
          url: '',
          height: '',
          width: ''
      }
  
    const handleChange = async () => {
      let file: File = files[0];
      oldImageSrc = await imageFileToString(file);
  
      //console.log(oldImageSrc.split('base64,')[1])
      upload(API_KEY,oldImageSrc.split('base64,')[1],file.name).then(
          (r)=> {
            newImage = r
          })
  
    };
  
  </script>
  
  <h2>Test image upload</h2>
  <div class="container">
    <FileButton
      name="files"
      button="variant-soft-primary"
      on:change={handleChange}
      bind:files
      accept=".jpg, .jpeg, .png"
    >
      Upload
    </FileButton>
  </div>
  {#if newImage}
      
  <h3>{newImage.filename}</h3>
  <img src={newImage.thumbUrl} alt="" srcset="">
  <p>Image Height{newImage.height}</p>
  <p>Image Width{newImage.width}</p>
  <p>Image Ratio{Number(newImage.height) / Number(newImage.width)}</p>
  <p>Image Ratio{Number(newImage.height) < Number(newImage.width)}</p>
  <img src={newImage.mediumUrl} alt="" srcset="">
  <img src={newImage.url} alt="" srcset="">
  {/if}