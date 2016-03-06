class NewsController < ApplicationController
    
    before_filter :authenticate_user!, only: [:new, :edit, :create, :update, :destroy]
    
    
    
    def index
        @news = News.all

    end
    
    def show
    end
    
    def new
        n = News.new
        n.title = params[:title]
        n.content = params[:content]
        n.published = params[:published]
        n.save
        redirect_to "/news"
    end

    def edit
        @news = post[params:id]
    end
    
    def create
        
    end
    
    def destroy
    end
    
    
end
