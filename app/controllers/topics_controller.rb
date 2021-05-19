class TopicsController < ApplicationController
 before_action :set_subprivate

 def set_sub
  @sub = params[:sub_id]
 end
end
