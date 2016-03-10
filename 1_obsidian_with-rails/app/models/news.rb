class News < ActiveRecord::Base
    
    
    belongs_to :user
    # validates_presence_of :title, :content
    
    validates :title, presence: {
        message: "Must have a title !"
    }
    
    validates :content, presence: {
        message: "Must have a content !"
    }
    
    validates :title, uniqueness: {
        message: "Need another title !"
    }
 
end
