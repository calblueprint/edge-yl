class SchoolsController < ApplicationController

  def index
    @schools = School.all
    render component: 'SchoolsPage', props: { schools: @schools }
  end

  def show
    @school = School.find params[:id]
    # TODO(Warren): Fix this - has to do with react-rails prerender.
    # render component: 'SchoolPage', props: { school: @school }
  end

end

