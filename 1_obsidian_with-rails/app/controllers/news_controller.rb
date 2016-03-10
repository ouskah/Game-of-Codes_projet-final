class NewsController < ApplicationController
    
    before_filter :authenticate_user!, only: [:new, :edit, :create, :update, :destroy]
    
        
    def index
        @news = News.page(params[:page]).per(5)
        @latest_news = News.limit(3).order(created_at: :desc)
    end
    
    
    def show
        
        @news = News.find(params[:id])
        
    end
    
    
    def new
        n = News.new
        n.title = params[:title]
        n.content = params[:content]
        n.save
        redirect_to "/news"
    end

    
    #def edit
        # @news = News.all
     #   @news = News.find(params[:id])
    #end
    
    
    #def create
        # news.create title: params[:title]
        # redirect_to "/news"
    #end
    
        
    def update
        @news = News.find(params[:id])
        if @news.update(title: params[:title], content: params[:content])
            redirect_to "/news"
        else
            
            redirect_to "/news/#{params[:id]}"
        end
        
    end
    
    
    def destroy
        News.find(params[:id]).destroy
        redirect_to "/news"
        
        
    end
    
end