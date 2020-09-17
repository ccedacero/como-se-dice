class ItemsController < ApplicationController
    def create 
        # byebug
        # image = Cloudinary::Uploader.upload(params[:image])
        audio = Cloudinary::Uploader.upload(params[:audio], :resource_type => :video)
        # item = Item.create(image: image["url"], audio: audio["url"])
        item = Item.create(audio: audio["url"])
        Vocab.last.update(wordUrl:item.audio)
        render json: item

    end
end
