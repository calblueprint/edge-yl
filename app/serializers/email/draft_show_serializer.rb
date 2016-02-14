class DraftShowSerializer < DraftIndexSerializer

  attributes :updated_at

  def updated_at
    object.updated_at.strftime('%-I:%M:%S %p')
  end

end
